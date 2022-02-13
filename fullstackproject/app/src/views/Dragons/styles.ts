import { Theme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import { breedingBk, tripixel, checked } from 'assets/images';

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
  img: {
    marginTop: '5rem',
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
  genesis: {
    maxWidth: '72rem',
    padding: '3rem',
    margin: 'auto',
    display: 'grid',
  },
  title: {
    fontSize: '40px',
    fontWeight: 800,
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
    margin: 'auto',
  },
  bokubrew: {
    display: 'flex',
  },
  bokubrewTitle: {
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
    backgroundImage: `url(${breedingBk})`,
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

  BoxWrapper: {
    display: 'flex',
    '& img': {
      width: '60px',
      height: '60px',
      marginRight: '0.75rem',
    },
  },
  governanceTxt: {
    fontSize: '16px',
    marginTop: '20px',
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
    fontSize: '2rem',
    padding: '2rem',
  },
  roadMapListDesc: {
    padding: '2rem',
    fontSize: '2rem',
  },
  artistsDesc: {
    marginBottom: '20px',
    fontSize: '18px',
  },
  faqQ: {
    color: '#6072ff',
    margin: '2rem 0 0 0',
    fontSize: '18px',
    marginBottom: '0px',
    fontWeight: 700,
  },
  faqA: {
    fontSize: '18px',
    marginBottom: '30px',
  },
  connect: {
    fontSize: '18px',
    backgroundColor: '#3b38b3',
    width: '200px',
    marginTop: '50px',
    border: '1px solid #6072ff',
    padding: '10px',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'white',
  },
  card: {
    display: 'flex',
    background: 'rgba(0,0,0,.2)',
    padding: '0.5rem',
    boxShadow: '8px 8px 0 rgba(0,0,0,.3)',
    backdropFilter: 'blur(20px)',
  },
  cardImg: {
    width: '100px',
    height: '100px',
    marginRight: '1rem',
  },
  cardTxt: {
    fontSize: '16px',
  },
  detailTitle: {
    background: '#d92391',
    padding: '1rem 3rem',
    '& span': {
      fontSize: '30px',
    },
  },
  detailContext: {
    background: 'rgba(0,0,0,.4)',
    backdropFilter: 'blur(20px)',
  },
  dImgBox: {
    padding: '3rem',
    '& img': {
      width: '300px',
    },
  },
  dImg: {
    boxShadow: '12px 12px 0 rgb(0 0 0 / 30%)',
  },
  traitType: {
    background: '#6072ff',
    padding: '1rem',
    paddingTop: '10px !important',
  },
  traitTypeTxt: {
    fontSize: '18px',
  },
  detailTraitTypeContext: {
    marginTop: '50px',
    marginBottom: '50px',
  },
  traitDesc: {
    background: 'rgba(0,0,0,.4)',
    padding: '1rem',
    paddingTop: '10px !important',
  },
}));

export default styles;
