import styled from "styled-components";

import { useWallet } from "@solana/wallet-adapter-react";

import BreedingContainer from "./BreedingContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 0;
`;

export function NFTContainer({ candyMachine, network, setIsExpired }) {
  const wallet = useWallet();
  const { publicKey } = wallet;

  if (publicKey) {
    return (
      <Container>
        <BreedingContainer setIsExpired={setIsExpired} candyMachine={candyMachine} />
      </Container>
    );
  } else {
    return null;
  }
}
