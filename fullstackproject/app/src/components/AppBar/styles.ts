import { Theme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';

const styles: any = withStyles((theme: Theme) => ({
  root: {
    margin: '0 auto',
    width: '80%',
    padding: theme.spacing(2, 4, 2, 4),
    backgroundColor: theme.palette.primary.light,
    backgroundImage: 'none',
    // display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 80,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
    },
    display: 'block',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  logoContent: {
    width: 160,
    padding: 0,
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      width: 100,
      padding: theme.spacing(1.5, 0),
    },
  },
  logo: {
    width: '100%',
    display: 'block',
  },
  pageTitle: {
    padding: theme.spacing(0, 5),
    marginBottom: -10,
    fontSize: 30,
    [theme.breakpoints.down('md')]: {
      fontSize: 28,
      marginBottom: 0,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 26,
      marginBottom: 0,
      padding: theme.spacing(0, 2.5),
    },
  },
  docLink: {
    display: 'flex',
    marginRight: theme.spacing(2),
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    color: theme.palette.text.disabled,
    textDecoration: 'underline',
    position: 'relative',
    top: '15px',
  },
  icon: {
    margin: theme.spacing(0.5, 0),
  },
  social: {
    width: 100,
    // padding: 0,
    justifyContent: 'center',
    display: 'flex',
    '& img': {
      height: '25px',
    },
    padding: theme.spacing(3, 0),
  },
  twitter: {
    marginLeft: '20px',
  },
}));

export default styles;
