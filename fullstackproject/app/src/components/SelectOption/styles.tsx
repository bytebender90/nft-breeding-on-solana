import { Theme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';

const styles: any = withStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.light,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  logoContent: {
    padding: theme.spacing('44px', '16px'),
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
    },
  },
  drawerContent: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
}));

export default styles;
