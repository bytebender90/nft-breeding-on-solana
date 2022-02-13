import { Theme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';

const styles = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(1, 2.5),
    borderRadius: 100,
    border: `2px solid ${theme.palette.text.disabled}`,
    '& p': {
      fontSize: 18,
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1, 1),
      '& p': {
        fontSize: 13,
      },
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  divider: {
    borderColor: 'white',
  },
  walletModal: {
    width: '350px',
    position: "relative",
    color: '#ffff',
    border: 'none',
    zIndex: 100,
    display: 'flex',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
  },
  modalContent: {
    width: '100%',
    background: '#000000',
    border: '2px solid rgba(255,255,255,0.5)',
    boxSizing: 'border-box',
    borderRadius: '30px',
    padding: '12px 25px',
    outline: 'none',
  },
  walletLabel: {
    borderBottom: '1px solid white',
    paddingBottom: '10px',
  },
  walletItem: {
    width: '55%',
    textAlign: 'center',
  },
  amountItem: {
    width: '45%',
    textAlign: 'center',
  },
  wallet: {
    padding: '15px 0 15px 0',
    height: '20px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
  },
  walletAddress: {
    width: '90%',
    float: 'left',
  },
  copyToClipboard: {
    width: '10%',
    float: 'left',
    textAlign: 'right',
  },
  walletInfo: {
    fontSize: '13px',
    fontWeight: 'normal',
  },
  walletLb: {
    width: '50%',
    float: 'left',
  },
  walletAmount: {
    width: '50%',
    float: 'left',
    textAlign: 'right',
  },
  walletDetail: {
    height: '20px',
    padding: '5px 0 5px 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
  },
  viewOnTerra: {
    height: '30px',
    textAlign: 'center',
    fontSize: '15px',
  },
  fileCopyIcon: {
    cursor: 'pointer',
  },
  oii: {
    position: 'relative',
    top: '5px',
  },
  disconnectPart: {
    width: '150px',
    height: '40px',
    backgroundColor: 'rgba(41, 51, 61)',
    border: '1px solid rgba(214,214,214, 0.75)',
    boxSizing: 'border-box',
    borderRadius: '76px',
    margin: 'auto',
    marginTop: '7px',
    textAlign: 'center',
    cursor: 'pointer',
  },
  powersettingIcon: {
    position: 'relative',
    top: '7px'
  },
  slideDown: {
    transitionDuration: '0.3s'
  }
}));

export default styles;
