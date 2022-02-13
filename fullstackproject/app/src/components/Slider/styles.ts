import { Theme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';

const styles: any = withStyles((theme: Theme) => ({
  root: {
    width: '100%',
  },
  sliderContent: {
    '& .MuiSlider-rail': {
      opacity: 1,
      backgroundImage:
        'linear-gradient(90deg, rgba(240,21,6,1) 0%, rgba(254,239,7,1) 33%, rgba(239,245,2,1) 66%, rgba(31,255,0,1) 100%)',
    },
    '& .MuiSlider-track': {
      border: 'none',
      backgroundColor: 'transparent',
    },
    '& .MuiSlider-thumb': {
      width: 10,
      height: 10,
      backgroundImage:
        'linear-gradient(90deg, rgba(240,21,6,1) 0%, rgba(254,239,7,1) 33%, rgba(239,245,2,1) 66%, rgba(31,255,0,1) 100%)',
      border: '1px solid black',
    },
  },
}));

export default styles;
