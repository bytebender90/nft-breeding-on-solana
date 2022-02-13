import React, { FC, useEffect, useState } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GridContainer from 'components/Grid/GridContainer';
import { parentDragons } from '../Dragons/parentDragons';
import { titleArrow, anon } from 'assets/images';
import GridItem from 'components/Grid/GridItem';
import withStyles from './styles';
interface IDashboardProps {
  classes: any;
}

const Dragons: FC<IDashboardProps> = (props) => {
  const { classes } = props;

  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <Box className={classes.headerContent}>
          <Box className={classes.tokenomics}>
            <Typography className={classes.title}>
              <img src={titleArrow} className={classes.titleArrow} />
              Adult Dragons
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.genesis}>
        <GridContainer spacing={4}>
          {parentDragons.map((item: any, index: number) => (
            <GridItem xs={12} sm={12} md={4} mt={7} mb={7} key={index}>
              <Box className={classes.card}>
                <Box className={classes.cardImgBox}>
                  <img src={item.metadata.image} className={classes.cardImg} />
                </Box>
                <Box className={classes.cardInfo}>
                  <p className={classes.cardTxt}>{item.tokenData.name}</p>
                  <Link to={'/ehecatldragons/#'} className={classes.connect}>
                    Details
                  </Link>
                </Box>
              </Box>
            </GridItem>
          ))}
        </GridContainer>
      </Box>
    </Box>
  );
};

export default withStyles(Dragons);
