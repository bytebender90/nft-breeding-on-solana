import { Theme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import { fontWeight } from '@mui/system';

const styles: any = withStyles((theme: Theme) => ({
  root: {
    color: 'white',
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.secondary.dark,
    height: '100%',
    display:'block'
  },
  //header
  headerRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  title: { 
    fontSize: 17,
    color:'rgba(255, 255, 255, 0.5)'
  },
  footerTitle:{
    color:'rgba(255, 255, 255, 0.75)',
    fontSize: 18
  },
  subTitle: {
    color: theme.palette.text.primary,
    fontSize: 26,
    '& small': {
      fontSize: 18,
    },
  },
  titleImage: {
    width: 87,
    height: 87,
    backgroundColor: theme.palette.primary.dark,
    borderRadius: '100%',
    marginRight: theme.spacing(1),
    '& img': {
      width: '100%',
      height: '100%',
    },
  },
  tvlSpace: {
    height: 87,
  },
  poolSpace:{
    height: 50
  },
  //body
  bodyContent: {
    margin: theme.spacing(0, 0, 1.5, 0),
    padding: theme.spacing(0, 2),
  },
  bodyCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
  },
  bodyLP:{
    padding: theme.spacing(4, 8, 2, 8),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 4, 4, 4),
    },
  }
}));

export default styles;
