import "../styles/BreedingContainer.css";
import { useEffect, useState } from "react";

import { Button, Col, Container, Row } from "react-bootstrap";

import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { BN, Program, Provider, web3 } from "@project-serum/anchor";
import * as anchor from "@project-serum/anchor";
import {
  TOKEN_PROGRAM_ID,
  Token,
  ASSOCIATED_TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { useWallet } from "@solana/wallet-adapter-react";

import NftListsModal from "./NFTListModal";

import Timer from "./Timer";
import idl from "../idl.json";
import key from "../key.json";
import axios from "axios";

const { SystemProgram, Keypair } = web3;
/* create an account  */
const baseAccount = Keypair.fromSecretKey(new Uint8Array(key));
const opts = {
  preflightCommitment: "processed",
};
const programID = new PublicKey(idl.metadata.address);

const BreedingContainer = ({ nftLists, setIsExpired }) => {
  const [isBreeding, setIsBreeding] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [isCreated, setIsCreated] = useState(false);
  const [isUserExist, setUserExist] = useState(false);

  const [firstNft, setFirstNft] = useState(null);
  const [secNft, setSecNft] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [parent, setParent] = useState("");

  const wallet = useWallet();
  console.log("111111111111111111", nftLists?.length)

  const { REACT_APP_WORLD_TIME_API_URL, REACT_APP_ELAPSED_TIME, REACT_APP_SOLANA_NETWORK, REACT_APP_TOKEN_ACCOUNT } = process.env;

  const network = clusterApiUrl(REACT_APP_SOLANA_NETWORK);
  const connection = new Connection(network, opts.preflightCommitment);
  async function getProvider() {
    const provider = new Provider(connection, wallet, opts.preflightCommitment);
    return provider;
  }

  async function initailize() {
    try {
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

      const timeRemaining = requestedAt
        ? await getTimeRemaining(requestedAt)
        : 0;

      setUserExist(account.isConfirmed);
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining);
        setIsCreated(true);
        setIsBreeding(true);
      } else {
        if (isCreated && nftLists?.length < furtherCount) setIsExpired(true);
        setIsCreated(false);
        setTimeRemaining(0);
      }
    } catch (err) {
      console.log("Transaction error: ", err);
    }
  }

  async function getTimeRemaining(requestedAt) {
    const currentTimeData = await axios.get(`${REACT_APP_WORLD_TIME_API_URL}`);
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

      const currentTimeData = await axios.get(
        `${REACT_APP_WORLD_TIME_API_URL}`
      );
      const requestedAt = currentTimeData.data.datetime;

      const mint = new PublicKey(REACT_APP_TOKEN_ACCOUNT);
      const from = await createAssociatedTokenAccount(
        connection,
        mint,
        program.provider.wallet
      );

      await program.rpc.createUser(
        provider.wallet.publicKey.toString(),
        nftLists?.length,
        requestedAt,
        {
          accounts: {
            user,
            authority,
            author: program.provider.wallet.publicKey,
            mint,
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

      const currentTimeData = await axios.get(
        `${REACT_APP_WORLD_TIME_API_URL}`
      );
      const requestedAt = currentTimeData.data.datetime;
      const mint = new PublicKey(REACT_APP_TOKEN_ACCOUNT);
      const from = await createAssociatedTokenAccount(
        connection,
        mint,
        program.provider.wallet
      );

      await program.rpc.updateUser(requestedAt, nftLists?.length, {
        accounts: {
          user,
          author: program.provider.wallet.publicKey,
          mint,
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

  async function getBalance(mintPda) {
    const provider = await getProvider();
    const program = new Program(idl, programID, provider);
    const parsedTokenAccountsByOwner =
      await program.provider.connection.getParsedTokenAccountsByOwner(
        program.provider.wallet.publicKey,
        { mint: mintPda }
      );
    let balance = parsedTokenAccountsByOwner.value[0].account.data.parsed.info.tokenAmount.uiAmount;
    return balance;
  }

  async function createAssociatedTokenAccount(connection, mint, wallet) {
    const associatedTokenAddress = await Token.getAssociatedTokenAddress(
      ASSOCIATED_TOKEN_PROGRAM_ID,
      TOKEN_PROGRAM_ID,
      mint,
      wallet.publicKey
    );

    return associatedTokenAddress;
  }

  async function handleMintToken() {
    const connection = new Connection(network, "processed");
    const mint = new PublicKey(REACT_APP_TOKEN_ACCOUNT);
    const provider = await getProvider();
    const program = new Program(idl, programID, provider);
    const from = await createAssociatedTokenAccount(
      connection,
      mint,
      program.provider.wallet
    );

    try {
      const tx = await program.rpc.mintTokens(new anchor.BN(10000000000), {
        accounts: {
          authority: provider.wallet.publicKey,
          mint,
          from,
          tokenProgram: TOKEN_PROGRAM_ID,
        },
      });

      console.log("tx: ", tx);
    } catch (error) {
      console.log("transaction error: ", error)
    }
  }

  async function getPubkey(array) {
    return Keypair.fromSecretKey(new Uint8Array(array));
  }

  const handleBreedingStart = async () => {
    // if (isUserExist) await updateBreedingUser();
    // else await createBreedingUser();
    if (firstNft && secNft) {
      if (isUserExist) await updateBreedingUser();
      else await createBreedingUser();
    } else {
      alert("Select two NFTs!");
    }
  };

  const selectNft = (parent) => {
    setShowModal(true);
    setParent(parent);
  };

  const setParentNft = (selectedItem) => {
    if (parent == "firstNft") setFirstNft(selectedItem);
    else setSecNft(selectedItem);
    setShowModal(false);
  };

  const onCompleteBrReq = () => {
    setIsBreeding(false);
    setIsExpired(true);
  };

  useEffect(async () => {
    window.Buffer = window.Buffer || require("buffer").Buffer;
    await initailize();
  }, []);

  return (
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
