import { Theme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import { breedingBk, layoutBgImage, tripixel, checked } from 'assets/images';

const styles: any = withStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
  },
  container: {},
  header: {
    backgroundColor: 'rgb(227 186 51)',
    backdropFilter: 'blur(40px)',
  },
  headerContent: {
    width: '80%',
    margin: '0 auto',
    textAlign: 'center',
  },
  img: {
    marginTop: '5rem',
  },
  imgDragon: {
    width: '250px',
  },
  txt: {
    fontSize: '1.5rem',
    marginTop: '1rem',
  },
  dragonAnimation: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    border: '3px solid #3b38b3',
    WebkitTransform: 'translateY(50%)',
    transform: 'translateY(50%)',
  },

  title: {
    fontSize: '40px',
    fontWeight: 800,
    fontFamily: "'Mochiy Pop P One', sans-serif",
  },
  titleArrow: {
    marginRight: '1rem',
  },
  loreTxt: {
    marginBottom: '1rem',
    fontSize: '24px',
  },
  tokenomics: {
    maxWidth: '72rem',
    padding: '3rem',
    marginBottom: '50px',
    background: 'rgb(10 32 14 / 70%)',
    margin: 'auto',
  },
  tokenomicsWrap: {
    marginTop: '500px',
    maxWidth: '72rem',
    padding: '3rem',
    marginBottom: '50px',
    background: 'rgb(10 32 14 / 70%)',
    margin: 'auto',
  },
  eds: {
    display: 'flex',
  },
  edsTitle: {
    fontSize: '2rem',
    color: '#52a638',
    marginTop: '40px',
    marginBottom: '40px',
  },
  supplyItem: {
    border: '1px solid #6072ff',
    backgroundColor: '#3b38b3',
    boxShadow: '12px 12px 0 rgb(0 0 0 / 30%)',
    textAlign: 'center',
    fontSize: '18px',
    height: '100%',
  },
  sTitle: {
    color: '#6072ff',
    margin: '2rem 0 0 0',
    fontSize: '30px',
  },
  supplyTitle: {
    backgroundColor: 'rgba(0,0,0,.4)',
    padding: '1rem',
  },
  tokenomicBox: {
    background: 'rgba(23,31,55,.7)',
    marginBottom: '10px',
  },
  supplyDescription: {
    padding: '1rem 2rem',
    flex: 1,
  },
  utility: {},
  utilityItem: {
    fontSize: '18px',
    background: '#d92391',
    textAlign: 'center',
    height: '100%',
  },
  breedingItem: {
    border: '1px solid #6072ff',
    boxShadow: '12px 12px 0 rgb(0 0 0 / 30%)',
    textAlign: 'center',
    height: '94%',
    backgroundImage: `url(${layoutBgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    alignItems: 'center',
  },
  breedingStep3: {
    border: '1px solid #6072ff',
    boxShadow: '12px 12px 0 rgb(0 0 0 / 30%)',
    textAlign: 'center',
    height: '94%',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    alignItems: 'center',
  },
  breedingStep2: {},
  breedingBox: {
    display: 'flex',
    textAlign: 'center',
    marginBottom: '1rem',
    border: '3px solid #d92391',
    alignItems: 'center',
    fontSize: '20px',
  },
  BoxWrapper: {
    display: 'flex',
    '& img': {
      width: '60px',
      height: '60px',
      marginRight: '0.75rem',
    },
  },
  governanceTxt: {
    fontSize: '18px',
    marginTop: '20px',
    fontFamily: "'Mochiy Pop P One', sans-serif",
  },
  roadMapList: {
    border: '1px solid #6072ff',
    background: '#3b38b3',
    boxShadow: '12px 12px 0 rgb(0 0 0 / 30%)',
    backgroundImage: tripixel,
    marginBottom: '20px',
    display: 'flex',
  },
  roadMapListWrapper: {
    display: 'flex',
    border: 'none',
  },
  roadMapListCheckBox: {
    backgroundColor: 'rgba(0,0,0,.4)',
    padding: '2rem',
  },
  roadMapListPhase: {
    fontSize: '1.5rem',
    padding: '2rem',
  },
  roadMapListDesc: {
    padding: '2rem',
    fontSize: '2rem',
    [theme.breakpoints.down('md')]: {
      borderTop: '1px solid rgba(0,0,0,.4)',
    },
  },
  artistsDesc: {
    marginBottom: '20px',
    fontSize: '18px',
  },
  faqQ: {
    color: '#6072ff',
    margin: '2rem 0 0 0',
    fontSize: '20px',
    marginBottom: '0px',
    fontWeight: 700,
  },
  faqA: {
    fontSize: '24px',
    fontFamily: "'Mochiy Pop P One', sans-serif",
  },
  roadMapListBox: {
    margin: '0',
    marginBottom: '1px solid rgba(0,0,0,.4)',
  },
  roadMapTitle: {
    fontSize: '20px',
    marginTop: '40px',
    textAlign: 'center',
    fontFamily: "'Mochiy Pop P One', sans-serif",
    '& span': {
      color: 'yellow',
      fontFamily: "'Mochiy Pop P One', sans-serif",
    },
  },
  roadMapTxt: {
    fontSize: '24px',
    marginTop: '20px',
    textAlign: 'left',
    fontFamily: "'Mochiy Pop P One', sans-serif",
    '& span': {
      color: 'yellow',
      fontFamily: "'Mochiy Pop P One', sans-serif",
    },
    '& label': {
      fontFamily: "'Mochiy Pop P One', sans-serif",
      fontSize: '27px',
    },
  },
}));

export default styles;
