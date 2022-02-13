import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { titleArrow } from 'assets/images';
import GridItem from 'components/Grid/GridItem';
import withStyles from './styles';
import styled from 'styled-components';

interface IEhecatlDragonsProps {
  classes: any;
}
const EhecatlDragons: FC<IEhecatlDragonsProps> = (props) => {
  const { classes } = props;

  return (
    <Box className={classes.container} style={{ height: '90vh' }}>
      <Box className={classes.header}>
        <Box className={classes.headerContent}>
          <Box className={classes.tokenomics}>
            <Typography className={classes.title}>
              <img src={titleArrow} className={classes.titleArrow} />
              Ehecatl Dragons
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.context}>
        <Typography className={classes.contextTitle}>Coming Soon</Typography>
      </Box>
    </Box>
  );
};

export default withStyles(EhecatlDragons);
