import { Theme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';

const styles: any = withStyles((theme: Theme) => ({
  root: {
    height: '100%',
    position: 'fixed',
    overflow: 'auto',
    padding: theme.spacing(0, 0, 13, 0),
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    '&::-webkit-scrollbar ': {
      width: 8,
    },
    '&::-webkit-scrollbar-thumb ': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
      borderRadius: '10px',
      backgroundColor: '#999',
    },
    '&::-webkit-scrollbar-track': {
      background: 'none',
    },
  },
  logoContent: {
    padding: theme.spacing('44px', '16px'),
    marginBottom: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      backgroundColor: theme.palette.primary.dark,
      borderRadius: '100%',
      width: 120,
      height: 120,
      [theme.breakpoints.down('md')]: {
        width: 64,
        height: 64,
      },
      [theme.breakpoints.down('sm')]: {
        width: 120,
        height: 120,
      },
    },
  },
  sideLogoContent: {
    width: 160,
    padding: 0,
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      width: 160,
      padding: theme.spacing(4, 4.5, 0, 4.5),
    },
  },
  sideLogo: {
    width: '100%',
    display: 'block',
  },
  drawerContent: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
}));

export default styles;
