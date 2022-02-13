import { useEffect, useState } from "react";
import styled from "styled-components";

import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, clusterApiUrl, Connection } from "@solana/web3.js";

import { fetchNFTsOwnedByWallet } from "../lib/fetchNFTsByWallet";

// import { NFTItem } from "./NFTItem";
import BreedingContainer from "./BreedingContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 0;
`;

const Button = styled.button`
  color: white;
  background-color: teal;
  border: none;
  box-shadow: none;
  padding: 1.5em;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export function NFTContainer({ network, setIsExpired }) {
  // const { connection } = useConnection();
  const connection = new Connection(clusterApiUrl(process.env.REACT_APP_SOLANA_NETWORK));
  const wallet = useWallet();
  const { publicKey } = wallet;
  const [NFTs, setNFTs] = useState(null);

  async function getNFTList() {
    if (!publicKey) return setNFTs(null);
    let userNFTs;
    try {
      userNFTs = await fetchNFTsOwnedByWallet(
        new PublicKey(publicKey),
        connection
      );
    } catch (error) {
      console.log("error: ", error);
    }
    if (typeof userNFTs === "undefined") {
      setNFTs(0);
    } else {
      setNFTs(userNFTs);
    }
  }

  useEffect(async () => {
    await getNFTList();
  }, [wallet]);

  if (publicKey) {
    if (NFTs === 0) {
      return (
        <Container>
          <p>
            No NFTs found for <strong>{publicKey.toString()}</strong>
            <strong>{network}</strong>!
          </p>
        </Container>
      );
    }
    return (
      <Container>
        <BreedingContainer nftLists={NFTs} setIsExpired={setIsExpired} />
      </Container>
    );
  } else {
    return null;
  }
}
