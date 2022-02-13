import { Theme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';

const styles: any = withStyles((theme: Theme) => ({
  root: {
    textTransform: 'none',    
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1, 3),
    },
  },  
  normal:{
    marginTop:'15px',
    fontSize:'24px',
  },
  round: {
    borderRadius: 100,
    fontSize:'18px',
    [theme.breakpoints.down('sm')]: {
      fontSize:'12px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize:'16px',
    }    
  },
  outlined: {
    color: theme.palette.text.primary,
    border: '1px solid white',
    '&:hover': {
        backgroundColor: 'rgba(200, 200, 200, 0.2)',
        border: '1px solid white',
    },
  },
  contained: {
    // border: '1px solid white',
  },
  connect:{
    fontSize:'18px',  
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  stake:{
    width:'70%',
    marginTop:'10px',
    [theme.breakpoints.down('md')]: {
      fontSize:'24px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize:'24px',
    },
  },
}));

export default styles;
