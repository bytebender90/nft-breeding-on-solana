import React from 'react';
import Box from '@mui/material/Box';
import MuiSlider from '@mui/material/Slider';

//styles
import withStyles from './styles';

interface ISliderProps {
  classes: any;
}

const Slider = (props: ISliderProps) => {
  const { classes } = props;
  return (
    <Box className={classes.root}>
      <MuiSlider className={classes.sliderContent} />
    </Box>
  );
};

export default withStyles(Slider);
