import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconBUtton from '@mui/material/IconButton';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { walletLabels, description} from './constants';
import {SlideDown} from 'react-slidedown'
//styles
import withStyles from './styles';
import 'react-slidedown/lib/slidedown.css'

interface IWalletInfoProps {
  classes: any;
  wallet: string;
  amount: string;
  USTAmount: number | null;
  lunaAmount: number | null;
  ANCAmount: number | null;  
  disconnect: () => void;
}

const WalletInfo = (props: IWalletInfoProps) => {
  const { classes, wallet, lunaAmount, ANCAmount, amount, USTAmount, disconnect} = props;

  const disWallet = useMemo(() => {
    return `${wallet.slice(0, 10)}...${wallet.slice(-4)}`;
  }, [wallet]);

  const WalletInfo = useMemo(() => {
    return `${wallet.slice(0, 13)}...${wallet.slice(-8)}`;
  }, [wallet]);

  const [open, setOpen] = React.useState<boolean>(false);
  const openModal = (value: boolean) => {
    setOpen(value);
  }

  return (
    <div className={classes.walletModal}>
      <Box className={classes.modalContent}>
        <SlideDown className={classes.slideDown}>
            {open ? (<Stack
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
              <Typography className={classes.walletItem} onClick={() => openModal(false)}>{disWallet}</Typography>
              <Typography className={classes.amountItem} onClick={() => openModal(false)}>{amount}</Typography>
            </Stack>) : (<Stack
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
              <PowerSettingsNewIcon sx={{ cursor: 'pointer' }} onClick={disconnect} />
              <Typography onClick={() => openModal(true)}>{disWallet}</Typography>
              <Typography onClick={() => openModal(true)}>{amount}</Typography>
            </Stack>)}
            {open ? (<div>
              <Box className={classes.wallet}>
                <Typography className={classes.walletAddress}>Wallet: <span className={classes.walletInfo}>{WalletInfo}</span></Typography>
                <div className={classes.copyToClipboard}>
                  <CopyToClipboard text={wallet}>
                    <span className={classes.fileCopyIcon}><FileCopyIcon /></span>
                  </CopyToClipboard>
                </div>
              </Box>
              <Box className={classes.walletDetail}>
                <Typography className={classes.walletLb}>{walletLabels.UST}</Typography>
                <Typography className={classes.walletAmount}>{USTAmount}</Typography>
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
            </div>): ""}
        </SlideDown>
      </Box>
    </div>
  );
};

export default withStyles(WalletInfo);
