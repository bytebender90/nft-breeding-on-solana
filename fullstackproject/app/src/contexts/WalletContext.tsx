import { createContext, useState, FC, useMemo, useEffect } from 'react';
import {
  useWallet,
  WalletInfo,
  useConnectedWallet,
} from '@terra-money/wallet-provider';
import { LCDClient } from '@terra-money/terra.js';

interface IContext {
  wallet: WalletInfo;
  terraLCD: LCDClient;
  USTAmount: string | null;
  LunaAmount: string | null;
  ANCAmount: string | null;
  handleConnect: () => void;
  disconnect: () => void;
}
export const WalletContext = createContext<Partial<IContext>>({});

const WalletProvider: FC = ({ children }) => {
  const { wallets, availableConnectTypes, connect, disconnect } = useWallet();
  // const connectedWallet = useConnectedWallet();
  // const [USTAmount, setUSTAmount] = useState<string | null>('0');
  // const [ANCAmount, setANCAmount] = useState<string | null>('0');
  // const [LunaAmount, setLunaAmount] = useState<string | null>('0');
  // const lcd: any = useMemo(() => {
  //   if (!connectedWallet) {
  //     return null;
  //   }
  //   return new LCDClient({
  //     URL: connectedWallet.network.lcd,
  //     chainID: connectedWallet.network.chainID,
  //   });
  // }, [connectedWallet]);

  // const handleConnect = () => {
  //   connect(availableConnectTypes[1]);
  // };
  const value = {
    // wallet: wallets[0],
    // USTAmount,
    // LunaAmount,
    // ANCAmount,
    // terraLCD: lcd,
    // handleConnect,
    disconnect,
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (connectedWallet && lcd) {
  //       lcd.bank.balance(connectedWallet.walletAddress).then((coins: any) => {
  //         setUSTAmount(changePriceFormat(coins._coins.uusd.amount.toString()));
  //         setLunaAmount(
  //           changePriceFormat(coins._coins.uluna.amount.toString())
  //         );
  //       });
  //     } else {
  //       setUSTAmount(USTAmount);
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [connectedWallet, lcd]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (connectedWallet && lcd) {
  //       lcd.bank.balance(connectedWallet.walletAddress).then((coins: any) => {
  //         const balanceQuery = {
  //           balance: { address: connectedWallet.walletAddress },
  //         };
  //         getANC(balanceQuery);
  //       });
  //     } else {
  //       setANCAmount(ANCAmount);
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [connectedWallet, lcd]);

  // const getANC = async (balanceQuery: any) => {
  //   if (connectedWallet?.network.lcd) {
  //     const res = await fetch(
  //       `${
  //         connectedWallet?.network.lcd
  //       }/wasm/contracts/${lpToken}/store?query_msg=${JSON.stringify(
  //         balanceQuery
  //       )}`
  //     );
  //     const data = await res.json();
  //     setANCAmount((data.result.balance / 1000000).toString());
  //   }
  // };
  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};

export default WalletProvider;
