import styled from "styled-components";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export function Header() {
  return (
    <div>
      <WalletMultiButton />
    </div>
  );
}
