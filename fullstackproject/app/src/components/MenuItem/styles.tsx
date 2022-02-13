import { Theme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';

const styles: any = withStyles((theme: Theme) => ({
  root: {
    color: 'white',
    borderRadius: 10,
    display: 'flex',
    marginTop: theme.spacing(1),
    height: '64px',
    '&:hover': {
      backgroundColor: 'rgba(200, 200, 200, 0.2)',
    },
  },
  icon: {
    padding: theme.spacing(2, 1, 2, 4),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2, 2.5, 2, 2.5),
    },
    fontSize: 17,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  label: {
    padding: theme.spacing(3, 2.5),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: 16,

    [theme.breakpoints.down('sm')]: {
      display: 'flex',
    },
    // fontFamily: "'Architects Daughter', cursive",
    // fontFamily: "'Ranchers', cursive",
    fontFamily: "'Chakra Petch', sans-serif",
  },
  active: {
    '&:hover': {
      backgroundColor: 'rgba(200, 200, 200, 0.2)',
    },
    color: 'black',
  },
}));

export default styles;
