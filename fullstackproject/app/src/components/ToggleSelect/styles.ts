import { Theme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';

const styles: any = withStyles((theme: Theme) => ({
  item: {
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.primary.light,
    textAlign: 'center',
    cursor: 'pointer',
    color: theme.palette.text.primary,
  },
  gridItem: {
    backgroundColor: theme.palette.primary.light,
    textAlign: 'center',
    cursor: 'pointer',
    color: theme.palette.text.primary,
  },
  round: {
    borderRadius: 100,
  },
  active: {
    backgroundColor: theme.palette.secondary.dark,
    backgroundImage:'none'
  },
  xs: {
    padding: theme.spacing(0.3, 0.5),
    fontSize: 24,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0.3, 0.5),
      fontSize: 20,
    },
  },
  sm: {
    padding: theme.spacing(1.5, 3.5),
    fontSize: 18,
    minWidth: 68,
  },
  md: {
    padding: theme.spacing(1.4, 5.4),
    fontSize: 24,
    minWidth: 90,
    fontWeight: 500,    
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 2.5),
    },
  },
  fullWidth: {
    flex: 1,
  },
  align:{
    padding: theme.spacing(1.5, 6),
    fontSize: 26,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(.7, 1.5),
      fontSize: 20,
    },
  },
  percent:{
    fontSize: 12,
    padding: theme.spacing('7px', '14px'),   
    [theme.breakpoints.down('xl')]: {
      fontSize: 12,
      padding: theme.spacing('7px', '14px'),
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 12,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 13,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 11,
    },
  },
  swap:{
    padding: theme.spacing(0, 5),
  },
  lpToggle:{
    padding: theme.spacing(1.4, 5.4),
    fontSize: 24,
    minWidth: 200,
    [theme.breakpoints.down('xl')]: {
      minWidth: 200,
    },
    [theme.breakpoints.down('lg')]: {
      minWidth: 100,
    },
    [theme.breakpoints.down('md')]: {
      minWidth: 40,
      fontSize: 20,
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: 100,
      fontSize: 20,
    },     
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 2.5),
    },
    marginRight:10,
    fontWeight: 500,   
  },
  
}));

export default styles;
