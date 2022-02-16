import { useEffect, useMemo, useState, useCallback, Fragment } from 'react';
import * as anchor from '@project-serum/anchor';

import styled from 'styled-components';
import { Container, Snackbar } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';
import { PublicKey, clusterApiUrl, Connection } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDialogButton } from '@solana/wallet-adapter-material-ui';
import {
  awaitTransactionSignatureConfirmation,
  CandyMachineAccount,
  CANDY_MACHINE_PROGRAM,
  getCandyMachineState,
  mintOneToken,
} from './candy-machine';
import { AlertState } from './utils';
import { Header } from './Header';
import { MintButton } from './MintButton';
import { GatewayProvider } from '@civic/solana-gateway-react';
import BreedingPannel from './BreedingPannel';
import { fetchNFTsOwnedByWallet } from "./BreedingPannel/lib/fetchNFTsByWallet";
import idl from "./BreedingPannel/idl.json";

const ConnectButton = styled(WalletDialogButton)`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 5px;
  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const MintContainer = styled.div``; // add your owns styles here

const Home = (props) => {
  const [isUserMinting, setIsUserMinting] = useState(false);
  const [candyMachine, setCandyMachine] = useState();
  const [alertState, setAlertState] = useState({
    open: false,
    message: '',
    severity: undefined,
  });
  const [isExpired, setIsExpired] = useState(false);

  const rpcUrl = props.rpcHost;
  const wallet = useWallet();

  const anchorWallet = useMemo(() => {
    if (
      !wallet ||
      !wallet.publicKey ||
      !wallet.signAllTransactions ||
      !wallet.signTransaction
    ) {
      return;
    }

    return {
      publicKey: wallet.publicKey,
      signAllTransactions: wallet.signAllTransactions,
      signTransaction: wallet.signTransaction,
    };
  }, [wallet]);

  const refreshCandyMachineState = useCallback(async () => {
    if (!anchorWallet) {
      return;
    }

    if (props.candyMachineId) {
      try {
        const cndy = await getCandyMachineState(
          anchorWallet,
          props.candyMachineId,
          props.connection,
        );
        setCandyMachine(cndy);
      } catch (e) {
        console.log('There was a problem fetching Candy Machine state');
        console.log(e);
      }
    }
  }, [anchorWallet, props.candyMachineId, props.connection]);

  const checkValidation = async () => {
    const connection = new Connection(clusterApiUrl(process.env.REACT_APP_SOLANA_NETWORK));
    const { publicKey } = wallet;

    let amountOfNft = -1;
    if (!publicKey) {
      alert("Please Connect your wallet to the site");
    };
    try {
      const userNFTs = await fetchNFTsOwnedByWallet(
        new PublicKey(publicKey),
        connection
      );
      if (typeof userNFTs === "undefined") {
        amountOfNft = 0;
      } else
        amountOfNft = userNFTs.length;
    } catch (error) {
      console.log("error: ", error);
    }

    const programID = new PublicKey(idl.metadata.address);
    const provider = new anchor.Provider(connection, wallet, "processed");
    const program = new anchor.Program(idl, programID, provider);
    const authority = program.provider.wallet.publicKey;
    const [user, bump] = await PublicKey.findProgramAddress(
      [authority.toBuffer()],
      program.programId
    );

    const account = await program.account.user.fetch(user);
    const isCreated = account.isConfirmed; // status of breeding request
    const furtherCount = account.furtherCount; // number of NFTs after breeding
    if (isCreated && amountOfNft != -1 && amountOfNft < furtherCount)
      return true;
    else
      return false;
  }

  const onMint = async () => {
    try {
      const vaild = await checkValidation();
      console.log("=============", vaild)
      if (vaild) {
        setIsUserMinting(true);
        document.getElementById('#identity')?.click();
        if (wallet.connected && candyMachine?.program && wallet.publicKey) {
          const mintTxId = (
            await mintOneToken(candyMachine, wallet.publicKey)
          )[0];

          let status = { err: true };
          if (mintTxId) {
            status = await awaitTransactionSignatureConfirmation(
              mintTxId,
              props.txTimeout,
              props.connection,
              true,
            );
          }

          if (status && !status.err) {
            setIsExpired(false)
            setAlertState({
              open: true,
              message: 'Succeeded!',
              severity: 'success',
            });
            setTimeout(() => {
              window.location.reload();
            }, 2000)
          } else {
            setAlertState({
              open: true,
              message: 'Failed! Please try again!',
              severity: 'error',
            });
          }
        }
      } else {
        setAlertState({
          open: true,
          message: 'Failed! Please try again!',
          severity: 'error',
        });
      }
    } catch (error) {
      let message = error.msg || 'Failed! Please try again!';
      if (!error.msg) {
        if (!error.message) {
          message = 'Transaction Timeout! Please try again.';
        } else if (error.message.indexOf('0x137')) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf('0x135')) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          window.location.reload();
        } else if (error.code === 312) {
          message = `Period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: 'error',
      });
    } finally {
      setIsUserMinting(false);
    }
  };

  useEffect(() => {
    refreshCandyMachineState();
  }, [
    anchorWallet,
    props.candyMachineId,
    props.connection,
    refreshCandyMachineState,
  ]);

  return (
    <div style={{ marginTop: '-70px' }}>
      {isExpired && (
        <Container maxWidth="xs" style={{ position: 'relative' }}>
          <MintContainer>
            <MintButton
              candyMachine={candyMachine}
              isMinting={isUserMinting}
              onMint={onMint}
            />
          </MintContainer>
        </Container>
      )}
      <BreedingPannel setIsExpired={setIsExpired} />
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Home;
