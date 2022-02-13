import { Theme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';

const styles: any = withStyles((theme: Theme) => ({
  root: {
    // display: 'flex',
    // padding: theme.spacing(3.5, 2),
  },
  menuItem: {
    textDecoration: 'none',
  },
  docContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '24px',
  },
  icon: {
    textAlign: 'center',
    justifyContent: 'center',
    display: 'none',
    marginTop: '2px',
    color: theme.palette.text.disabled,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
    },
  },
  docTxt: {
    color: 'rgba(255, 255, 255, 0.5)',
    cursor: 'pointer',
    fontSize: '20px',
    textDecorationLine: 'underline',

    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  nav: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  side: {
    display: 'block',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
}));

export default styles;
