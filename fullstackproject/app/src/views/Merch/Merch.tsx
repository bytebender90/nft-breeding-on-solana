import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import useMediaQuery from '@mui/material/useMediaQuery';

import Button from 'components/Button';

import { titleArrow } from 'assets/images';
import GridItem from 'components/Grid/GridItem';
import withStyles from './styles';
import styled from 'styled-components';
interface IMerchProps {
  classes: any;
}
const Merch: FC<IMerchProps> = (props) => {
  const { classes } = props;

  return (
    <Box className={classes.container} style={{ height: '90vh' }}>
      <Box className={classes.header}>
        <Box className={classes.headerContent}>
          <Box className={classes.tokenomics}>
            <Typography className={classes.title}>
              <img src={titleArrow} className={classes.titleArrow} />
              MERCH
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

export default withStyles(Merch);
