import { Calculate } from '@mui/icons-material';
import { Theme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';

const styles: any = withStyles((theme: Theme) => ({
  root: {
    // height: '100vh',
    backgroundRepeat: 'no-repeat !important',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#171f37',
    color: 'white',
  },
  logo: {
    width: 50,
  },
  actionContentRoot: {},
  container: {
    // overflow: 'auto',
    '&::-webkit-scrollbar ': {
      width: 8,
      '&:hover': {
        width: 16,
      },
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
  content: {
    // float: "right",
  },
  connect: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mMenu: {
    padding: theme.spacing(3, 4, 3, 0),
    cursor: 'pointer',
  },
}));

export default styles;
