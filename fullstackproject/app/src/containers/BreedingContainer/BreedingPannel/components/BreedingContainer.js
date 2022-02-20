import "../styles/BreedingContainer.css";
import { useEffect, useState } from "react";

import { Button, Col, Container, Row, Spinner } from "react-bootstrap";

import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { Program, Provider, web3 } from "@project-serum/anchor";
import * as anchor from "@project-serum/anchor";
import {
  TOKEN_PROGRAM_ID,
  Token,
  ASSOCIATED_TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";

import NftListsModal from "./NFTListModal";

import Timer from "./Timer";
import idl from "../idl.json";
import adultNfts from "../gib-meta.json";
import { fetchNFTsOwnedByWallet } from "../lib/fetchNFTsByWallet";

const opts = {
  preflightCommitment: "processed",
};
const programID = new PublicKey(idl.metadata.address);

const BreedingContainer = ({ candyMachine, setIsExpired }) => {
  const [isBreeding, setIsBreeding] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [isCreated, setIsCreated] = useState(false);
  const [isUserExist, setUserExist] = useState(false);

  const [firstNft, setFirstNft] = useState(null);
  const [secNft, setSecNft] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [parent, setParent] = useState("");
  const [adultList, setAdultList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [nftLists, setNFTs] = useState(null);

  const wallet = useWallet();

  const {
    REACT_APP_WORLD_TIME_API_URL,
    REACT_APP_ELAPSED_TIME,
    REACT_APP_SOLANA_NETWORK,
    REACT_APP_TOKEN_ACCOUNT,
    REACT_APP_DIPOSIT_WALLET_ADDRESS,
    REACT_APP_DIPOSIT_TOKEN_AMOUNT,
  } = process.env;

  const network = clusterApiUrl(REACT_APP_SOLANA_NETWORK);
  const connection = new Connection(network, opts.preflightCommitment);

  async function getWorldTime() {
    return (await axios.get(`${REACT_APP_WORLD_TIME_API_URL}`));
  }

  async function getProvider() {
    const provider = new Provider(connection, wallet, opts.preflightCommitment);
    return provider;
  }

  async function getNFTList() {
    const { publicKey } = wallet;
    if (!publicKey) {
      setNFTs(null);
      return null;
    };
    let userNFTs;
    try {
      userNFTs = await fetchNFTsOwnedByWallet(
        new PublicKey(publicKey),
        connection
      );

      if (typeof userNFTs === "undefined") {
        setNFTs(0);
        return null;
      } else {
        setNFTs(userNFTs);
        return userNFTs;
      }
    } catch (error) {
      console.log("error: ", error);
      return null;
    }
  }

  async function initailize() {
    try {
      setLoading(false);
      const userNFTs = await getNFTList();

      setTimeout(async () => {
        const provider = await getProvider();
        const program = new Program(idl, programID, provider);
        const authority = program.provider.wallet.publicKey;
        const [user, bump] = await PublicKey.findProgramAddress(
          [authority.toBuffer()],
          program.programId
        );
        const account = await program.account.user.fetch(user);
        const requestedAt = account.timestamp; // timestamp
        const isCreated = account.isConfirmed; // status of breeding request
        const furtherCount = account.furtherCount; // number of NFTs after breeding
        const firstImg = account.firstImg;
        const secondImg = account.secondImg;
        const firstNft = { NFTData: { image: firstImg } };
        const secNft = { NFTData: { image: secondImg } };
        let timeRemaining = 0;
        try {
          timeRemaining = requestedAt
            ? await getTimeRemaining(requestedAt)
            : 0;
        } catch (err) {
          window.location.reload();
        }

        if (timeRemaining > 0) {
          setFirstNft(firstNft);
          setSecNft(secNft)
        } else {
          setFirstNft(null);
          setSecNft(null)
        }

        setUserExist(account.isConfirmed);
        if (timeRemaining > 0) {
          setTimeRemaining(timeRemaining);
          setIsCreated(true);
          setIsBreeding(true);
        } else {
          if (isCreated && userNFTs?.length < furtherCount) setIsExpired(true);
          setIsCreated(false);
          setTimeRemaining(0);
        }
      }, 100)
    } catch (err) {
      console.log("new account");
    }
  }

  async function getTimeRemaining(requestedAt) {
    const currentTimeData = await getWorldTime();
    const currentTime = currentTimeData.data.datetime;
    const secondTypeCurrentTime = new Date(currentTime).getTime() / 1000;

    const secondTypeReqTime = new Date(requestedAt).getTime() / 1000;
    const timeRemaining =
      REACT_APP_ELAPSED_TIME * 60 * 60 -
      (secondTypeCurrentTime - secondTypeReqTime);

    return timeRemaining;
  }

  async function createBreedingUser() {
    const provider = await getProvider();
    /* create the program interface combining the idl, program ID, and provider */
    const program = new Program(idl, programID, provider);
    try {
      const authority = program.provider.wallet.publicKey;
      const [user, bump] = await PublicKey.findProgramAddress(
        [authority.toBuffer()],
        program.programId
      );

      const currentTimeData = await getWorldTime();
      const requestedAt = currentTimeData.data.datetime;

      const mint = new PublicKey(REACT_APP_TOKEN_ACCOUNT);
      const from = await createAssociatedTokenAccount(
        connection,
        mint,
        program.provider.wallet.publicKey
      );

      const toPublickey = new PublicKey(REACT_APP_DIPOSIT_WALLET_ADDRESS);
      const to = await createAssociatedTokenAccount(
        connection,
        mint,
        toPublickey
      );

      const amount = REACT_APP_DIPOSIT_TOKEN_AMOUNT * 1000000000;

      await program.rpc.createUser(
        provider.wallet.publicKey.toString(),
        nftLists?.length,
        requestedAt,
        firstNft?.NFTData?.image,
        secNft?.NFTData?.image,
        new anchor.BN(amount),
        {
          accounts: {
            user,
            authority,
            author: program.provider.wallet.publicKey,
            to,
            from,
            tokenProgram: TOKEN_PROGRAM_ID,
            systemProgram: anchor.web3.SystemProgram.programId,
          },
        }
      );
      const account = await program.account.user.fetch(user);

      const timeRemaining = REACT_APP_ELAPSED_TIME * 60 * 60;
      setTimeRemaining(timeRemaining);
      setIsCreated(account.isConfirmed);
      setIsBreeding(account.isConfirmed);
    } catch (err) {
      console.log("Transaction error: ", err);
    }
  }

  async function updateBreedingUser() {
    const provider = await getProvider();
    /* create the program interface combining the idl, program ID, and provider */
    const program = new Program(idl, programID, provider);
    try {
      const authority = program.provider.wallet.publicKey;
      const [user, bump] = await PublicKey.findProgramAddress(
        [authority.toBuffer()],
        program.programId
      );

      const currentTimeData = await getWorldTime();
      const requestedAt = currentTimeData.data.datetime;
      const mint = new PublicKey(REACT_APP_TOKEN_ACCOUNT);
      const from = await createAssociatedTokenAccount(
        connection,
        mint,
        program.provider.wallet.publicKey
      );

      const toPublickey = new PublicKey(REACT_APP_DIPOSIT_WALLET_ADDRESS);
      const to = await createAssociatedTokenAccount(
        connection,
        mint,
        toPublickey
      );
      const amount = REACT_APP_DIPOSIT_TOKEN_AMOUNT * 1000000000;

      await program.rpc.updateUser(
        requestedAt,
        nftLists?.length,
        firstNft?.NFTData?.image,
        secNft?.NFTData?.image,
        new anchor.BN(amount),
        {
          accounts: {
            user,
            author: program.provider.wallet.publicKey,
            to,
            from,
            tokenProgram: TOKEN_PROGRAM_ID,
          },
        });
      const account = await program.account.user.fetch(user);

      const timeRemaining = REACT_APP_ELAPSED_TIME * 60 * 60;
      setTimeRemaining(timeRemaining);
      setIsCreated(account.isConfirmed);
      setIsBreeding(account.isConfirmed);
    } catch (err) {
      console.log("Transaction error: ", err);
    }
  }

  async function createAssociatedTokenAccount(connection, mint, publicKey) {
    const associatedTokenAddress = await Token.getAssociatedTokenAddress(
      ASSOCIATED_TOKEN_PROGRAM_ID,
      TOKEN_PROGRAM_ID,
      mint,
      publicKey
    );

    return associatedTokenAddress;
  }

  const handleBreedingStart = async () => {
    if (candyMachine?.state.isSoldOut)
      alert("Can't breed now. The Storage is empty")
    else {
      if (firstNft && secNft) {
        if (firstNft.data.uri != secNft.data.uri) {
          if (isUserExist) await updateBreedingUser();
          else await createBreedingUser();
        } else {
          alert("Can't use one adult for breeding")
        }
      } else {
        alert("Select two NFTs!");
      }
    }
  };

  const selectNft = (parent) => {
    setShowModal(true);
    setParent(parent);
  };

  const setParentNft = (selectedItem) => {
    if (
      selectedItem.NFTData.symbol == "ED" && selectedItem.NFTData.name.includes("Ehecatl Dragon") && adultList.includes(selectedItem.NFTData.edition)) {
      if (parent == "firstNft") setFirstNft(selectedItem);
      else setSecNft(selectedItem);
      setShowModal(false);
    } else {
      alert("Please select adult NFTs")
    }
  };

  const onCompleteBrReq = () => {
    // setIsBreeding(false);
    setIsExpired(true);
  };

  const fetchAdultEditionList = async () => {
    let adultList = [];
    adultNfts.map((item, index) => {
      adultList.push(item.metadata.edition);
    })
    setAdultList(adultList);
  }

  useEffect(async () => {
    window.Buffer = window.Buffer || require("buffer").Buffer;
    await initailize();
    await fetchAdultEditionList();
  }, []);

  return isLoading ? (
    <div>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <span className="ml-1">Please wait...</span>
    </div>
  ) : (
    <div className="text-center">
      {isBreeding && isCreated && (
        <Timer
          maxtimeRemaining={REACT_APP_ELAPSED_TIME * 60 * 60}
          timeRemaining={timeRemaining}
          onComplete={() => onCompleteBrReq()}
        />
      )}

      <Container className="text-center">
        <Row className="mt-3">
          <Col md="6">
            <div className="">
              <img
                src={firstNft?.NFTData?.image}
                className="img-fluid img-thumbnail block-example border border-dark breeded-img"
                onClick={isBreeding ? () => { } : () => selectNft("firstNft")}
              />
              <h3>A</h3>
            </div>
          </Col>
          <Col md="6">
            <div className="">
              <img
                src={secNft?.NFTData?.image}
                className="img-fluid img-thumbnail block-example border border-dark breeded-img"
                onClick={isBreeding ? () => { } : () => selectNft("secNft")}
              />
              <h3>B</h3>
            </div>
          </Col>
        </Row>
        <Row className="mt-2 mb-5 justify-content-center">
          <Col md="8">
            <Button
              onClick={handleBreedingStart}
              className="w-100"
              size="lg"
              disabled={isBreeding}
            >
              Start
            </Button>
          </Col>
        </Row>
      </Container>

      <NftListsModal
        nftLists={nftLists}
        showModal={showModal}
        setShowModal={setShowModal}
        setParentNft={setParentNft}
      />
    </div>
  );
};

export default BreedingContainer;
