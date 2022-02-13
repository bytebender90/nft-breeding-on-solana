import React, { FC, Fragment, ReactNode, useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { walletLabels, description} from './constants';
//styles
import withStyles from './styles';

interface WalletModalProps {
  classes: any;
  wallet: string;
  amount: string;
  lunaAmount: string;
  ANCAmount: string;
  disconnect: () => void;
  open: boolean;
  handleClose: (value: boolean) => void;
  copied: boolean;
}

export interface IAmountList {
  label: string;
  value: string;
}

const WalletModal: FC<WalletModalProps> = (props) => {
  const { 
    classes,
    wallet,
    amount,
    lunaAmount,
    ANCAmount,
    disconnect,
    open,
    handleClose
  } = props;

  const disWallet = useMemo(() => {
    return `${wallet.slice(0, 10)}...${wallet.slice(-4)}`;
  }, [wallet]);

  const WalletInfo = useMemo(() => {
    return `${wallet.slice(0, 15)}...${wallet.slice(-15)}`;
  }, [wallet]);

  const [copied, setCopied] = useState<boolean>(false);
  return (
    <div className={classes.root}>
      <Modal
        open={open}
        onClose={() => {handleClose(false)}}
        className = {classes.walletModal}
      >
        <Box className={classes.modalContent}>
          <Stack
            className={classes.walletLabel}
            direction='row'
            divider={
              <Divider
                orientation='vertical'
                flexItem
                className={classes.divider}
              />
            }
            spacing={1}
            sx={{ fontSize: 18, cursor: 'pointer' }}
          >
            <Typography className={classes.walletItem}>{disWallet}</Typography>
            <Typography className={classes.amountItem}>{amount}</Typography>
          </Stack>
          <Box className={classes.wallet}>
            <Typography className={classes.walletAddress}>Wallet: <span className={classes.walletInfo}>{WalletInfo}</span></Typography>
            <div className={classes.copyToClipboard}>
              <CopyToClipboard text={wallet}
                onCopy={() => setCopied(true)}>
                  <span className={classes.fileCopyIcon}><FileCopyIcon /></span>
              </CopyToClipboard>
            </div>
          </Box>
          <Box className={classes.walletDetail}>
            <Typography className={classes.walletLb}>{walletLabels.UST}</Typography>
            <Typography className={classes.walletAmount}>{amount}</Typography>
          </Box>
          <Box className={classes.walletDetail}>
            <Typography className={classes.walletLb}>{walletLabels.LUNA}</Typography>
            <Typography className={classes.walletAmount}>{lunaAmount}</Typography>
          </Box>
          <Box className={classes.walletDetail}>
            <Typography className={classes.walletLb}>{walletLabels.VOID}</Typography>
            <Typography className={classes.walletAmount}>{ANCAmount}</Typography>
          </Box>
          <Typography className={classes.viewOnTerra}>{description.vot}<span className={classes.oii}><OpenInNewIcon/></span></Typography>
          <Box className={classes.disconnectPart} onClick={disconnect}>
            <span className={classes.powersettingIcon}><PowerSettingsNewIcon/></span> Disconnect
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default withStyles(WalletModal);