import { useState } from "react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

import { NFTContainer } from "./components/NFTContainer";
import { OuterContainer, Container } from "./styles/common";
import { Header } from "./components/Header";

import 'bootstrap/dist/css/bootstrap.min.css';
require("@solana/wallet-adapter-react-ui/styles.css");

function BreedingPannel({ setIsExpired }) {
  // eslint-disable-next-line no-unused-vars
  const [network, setNetwork] = useState(process.env.REACT_APP_SOLANA_NETWORK);
  return (
    // <WalletConnectionProvider network={network}>
    <WalletModalProvider>
      <OuterContainer>
        <Header />
        <Container>
          <NFTContainer network={network} setIsExpired={setIsExpired} />
        </Container>
      </OuterContainer>
    </WalletModalProvider>
    // </WalletConnectionProvider>
  );
}

export default BreedingPannel;
