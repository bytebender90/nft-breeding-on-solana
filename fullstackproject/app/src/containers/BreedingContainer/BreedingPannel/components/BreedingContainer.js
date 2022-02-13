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

  const { REACT_APP_WORLD_TIME_API_URL, REACT_APP_ELAPSED_TIME } = process.env;

  const network = "http://127.0.0.1:8899";
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

      // const requestedAt = localStorage.getItem("requestedAt");
      // const isCreated = localStorage.getItem("isCreated");
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

      const mintPda = new PublicKey("FeoR1rt78YUadMp39WGpcsjdEjqhVW2ynSeE6KrLbeQm");
      const from = await createAssociatedTokenAccount(mintPda, program.provider.wallet);
      const to = new PublicKey("FeoR1rt78YUadMp39WGpcsjdEjqhVW2ynSeE6KrLbeQm");
      // localStorage.setItem("requestedAt", requestedAt)
      // localStorage.setItem("isCreated", 1);

      await program.rpc.createUser(
        provider.wallet.publicKey.toString(),
        nftLists?.length,
        requestedAt,
        {
          accounts: {
            user,
            authority,
            // to,
            // from,
            // tokenProgram: TOKEN_PROGRAM_ID,
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
      // localStorage.setItem("requestedAt", requestedAt)
      // localStorage.setItem("isCreated", 1);

      await program.rpc.createUser(requestedAt, nftLists?.length, {
        accounts: {
          user,
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

  async function createAssociatedTokenAccount(mint, wallet) {
    const associatedTokenAddress = await Token.getAssociatedTokenAddress(
      ASSOCIATED_TOKEN_PROGRAM_ID,
      TOKEN_PROGRAM_ID,
      mint,
      wallet.publicKey
    );

    return associatedTokenAddress;
  }

  async function handleGetToken() {
    const provider = await getProvider();
    const program = new Program(idl, programID, provider);
    const mintPda = new PublicKey("FeoR1rt78YUadMp39WGpcsjdEjqhVW2ynSeE6KrLbeQm");
    let amount = 300;
    try {
      let amountToAirdrop = new BN(amount * 100000000);
      let mintPdaBump = 253;

      let associatedTokenAccount = await createAssociatedTokenAccount(mintPda, provider.wallet);

      let signature = await program.rpc.airdrop(mintPdaBump, amountToAirdrop, {
        accounts: {
          payer: provider.wallet.publicKey,
          mint: mintPda,
          destination: associatedTokenAccount,
          rent: web3.SYSVAR_RENT_PUBKEY,
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: SystemProgram.programId,
          associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        },
        signers: [],
      });
      await connection.confirmTransaction(signature, "processed");
      console.log("success Airdrop successful!" + signature);
    } catch (err) {
      console.log("Error Airdrop failed!");
      console.log(err);
      throw err;
    }
  }

  const handleBreedingStart = async () => {
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
        <Row className="mt-3 justify-content-center">
          <Col md="4">
            <Button
              // onClick={handleGetToken}
              className="w-100"
            // disabled={isBreeding}
            >
              Get Tokens
            </Button>
          </Col>
        </Row>
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
