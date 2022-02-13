import { Theme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import { layoutBgImage } from 'assets/images';

const styles = withStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(0.2, 2),
    border: '1px solid transparent',
  },
  backgroundImage: {
    backgroundImage: `url(${layoutBgImage})`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
  },
  label: {
    color: theme.palette.text.disabled,
    display: 'flex',
    width: '100%',
    marginBottom: theme.spacing(0.5), 
  },
  space:{
    whiteSpace:'inherit'
  },
  flexGrow: {
    flex: 1,
  },
  error: {
    border: `1px solid ${theme.palette.error.main}`,
  },
  iconContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContent: {
    margin: theme.spacing(0, 0.5),
    padding: theme.spacing(0.5, 0),
    textAlign:'right',
  },
  sm: {
    '& input': {
      fontSize: 14,
    },
  },
  md: {
    '& input': {
      fontSize: 16,
    },
  },
  lg: {
    '& input': {
      fontSize: 18,
    },
  },
  round: {
    borderRadius: `${theme.spacing(1.5)}px!important`,
  },
  cursorPointer: {
    cursor: 'pointer',
  },
}));

export default styles;
