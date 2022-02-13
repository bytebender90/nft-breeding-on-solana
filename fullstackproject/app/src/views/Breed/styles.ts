import { Theme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';

const styles: any = withStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: 'rgb(227 186 51)',
    backdropFilter: 'blur(40px)',
  },
  headerContent: {
    width: '80%',
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '40px',
    fontWeight: 800,
  },
  titleArrow: {
    marginRight: '1rem',
  },
  tokenomics: {
    maxWidth: '72rem',
    padding: '3rem',
    marginBottom: '50px',
    margin: 'auto',
  },
  connect: {
    fontSize: '14px',
    boxShadow: '12px 12px 0 rgb(0 0 0 / 30%)',
    backgroundColor: '#3b38b3',
    width: '200px',
    marginTop: '50px',
  },
  contextTitle: {
    fontSize: '40px',
    fontWeight: 800,
    textAlign: 'center',
  },
}));

export default styles;
