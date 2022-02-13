import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import useMediaQuery from '@mui/material/useMediaQuery';

import Button from 'components/Button';

import {
  getPhantomWallet,
  getSolflareWallet,
} from '@solana/wallet-adapter-wallets';

import { WalletProvider } from '@solana/wallet-adapter-react';
import { titleArrow } from 'assets/images';
import GridItem from 'components/Grid/GridItem';
import withStyles from './styles';
import styled from 'styled-components';
import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';
import { Program, Provider, web3 } from '@project-serum/anchor';
import BreedingContainer from 'containers/BreedingContainer';
const { LAMPORTS_PER_SOL } = web3;

const network = clusterApiUrl('devnet');
interface IDashboardProps {
  classes: any;
}

const DashBoard: FC<IDashboardProps> = (props) => {
  const { classes } = props;
  const [viewChart, setViewChart] = useState<string | number>('day');
  const matches = useMediaQuery('(min-width:1362px)');
  const wallets = [getPhantomWallet(), getSolflareWallet()];
  const [walletAddress, setWalletAddress] = useState(null); // address of user
  const [poolWalletAddress, setPoolWalletAddress] = useState(null); //address of poolWallet
  const [stake_bal, setSelectedStakeBalance] = useState(null); // sol amount that the user bets
  const [balance, getWalletBalance] = useState<any>(null); // total sol amount of user's wallet
  const [pool_bal, getPoolWalletBalance] = useState(null); // total sol amount of poolWallet
  const [pred, setPrediction] = useState(null); // predection that user bets
  const [claimFunds, setClaimFunds] = useState(1); //set the amount of claim and deposit
  const [adminWalletAddress, setAdminWallet] = useState(null);
  //check if the phantom wallet is connected
  const checkIfWalletIsConnected = async () => {
    // const { solana } = window;
    // console.log('window', solana?.solana);
  };
  const connectWallet = async () => {
    await checkIfWalletIsConnected();
    await getBalance();
  };

  const getBalance = async () => {
    // const connection = new Connection(network, 'processed');
    // const provider = getProvider();
    // const publicKey = provider.wallet.publicKey;
    // const balanceOfwallet = await connection.getBalance(publicKey);
    // getWalletBalance(balanceOfwallet / LAMPORTS_PER_SOL);
  };

  const getProvider = () => {
    // const connection = new Connection(network, 'processed');
    // const provider = new Provider(connection, window.solana, 'processed');
    // return provider;
  };

  return (
    <Box className={classes.container} style={{ height: '90vh' }}>
      <Box className={classes.header}>
        <Box className={classes.headerContent}>
          <Box className={classes.tokenomics}>
            <Typography className={classes.title}>
              <img src={titleArrow} className={classes.titleArrow} />
              BREEDING
            </Typography>
            {/* <Button
              label='Connect Wallet'
              variant='contained'
              fullWidth
              className={classes.connect}
              onClick={connectWallet}
            /> */}
          </Box>
        </Box>

        <Box>
          <BreedingContainer />
        </Box>
      </Box>
    </Box>
  );
};

export default withStyles(DashBoard);
