import React, { FC, useEffect, useState } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GridContainer from 'components/Grid/GridContainer';

import useWallet from 'hooks/useWallet';
import {
  titleArrow,
  anon,
  blood,
  cosmic,
  crown,
  fire,
  fish,
  flame,
  glass,
  holy,
  laser,
  mutant,
  peepundead,
  smoking,
  statue,
  zombie,
} from 'assets/images';
import GridItem from 'components/Grid/GridItem';
import withStyles from './styles';
interface IDashboardProps {
  classes: any;
}
export interface IDragonList {
  id: string | number;
  img: any;
  hash: string | number;
  name: string;
}

const Dragons: FC<IDashboardProps> = (props) => {
  const { classes } = props;
  // console.log('props', props);

  const dragonItems: IDragonList[] = [
    {
      id: '1',
      hash: 'Cj5dQqMgno3f3qDg2jeZaEAK4vxMSHd2WH3t37HRkkX3',
      img: blood,
      name: 'blood',
    },
    {
      id: '2',
      hash: 'GtnSWiLiQzdUneKahGscFd4uEVkRFG1wU6nXcjDHk2Ex',
      img: cosmic,
      name: 'cosmic',
    },
    {
      id: '3',
      hash: 'DS1QgU9XLkHPb49Mf5MAGNMzEwjMeEeC2rbbUwaoca36',
      img: crown,
      name: 'crown',
    },
    {
      id: '4',
      hash: 'DUgriH1FahUXWVjhbcbvKHb9BrghYjWtv8SyKL7zjuDT',
      img: fire,
      name: 'fire',
    },
    {
      id: '5',
      hash: 'GMWGUdQN5831GAsRrKduBBVq5Wxo9QEGES1hyEd9XSEm',
      img: fish,
      name: 'fish',
    },
    {
      id: '6',
      hash: '9dHn8TwURfwvvREf9pADAxpthXtoUHhy5KdUnWbX91Rj',
      img: flame,
      name: 'blood',
    },
    {
      id: '7',
      hash: 'HCUXEW4Kit9CJUK18jKY98r3iw4CD8bzf1yKMta3PhQx',
      img: glass,
      name: 'glass',
    },
    {
      id: '8',
      hash: 'AKW7rfYeMrTGYXTjytXexEjBAXU6RTfoFXHWg72Vb2D5',
      img: holy,
      name: 'holy',
    },
    {
      id: '9',
      hash: '4kAYBtqurH6rEP5YHWjZunjge3tjPAB5ikJVfC1AexAF',
      img: laser,
      name: 'laser',
    },
    {
      id: '10',
      hash: 'Amhg7jgCdAycvwBfLw9ZYdbai8QidfgPWC35SRQY44wi',
      img: mutant,
      name: 'mutant',
    },
    {
      id: '11',
      hash: 'aR46iB1HZX5PgSHJ53rhqbo7uTmVfDPBQ7TtrKExQnk',
      img: peepundead,
      name: 'peepundead',
    },
    {
      id: '12',
      hash: 'H7y3hAvi2y2qFWQYQXrjB9HLN2HVU1iKSviGc1LczvA3',
      img: smoking,
      name: 'smoking',
    },
    {
      id: '13',
      hash: '5bjPNSgWGiP2raZKMt86BR9Sbpab2trxWQHDggGaZ4Xq',
      img: statue,
      name: 'blood',
    },
    {
      id: '14',
      hash: 'aR46iB1HZX5PgSHJ53rhqbo7uTmVfDPBQ7TtrKExQnk',
      img: zombie,
      name: 'zombie',
    },
    {
      id: '15',
      hash: 'H7y3hAvi2y2qFWQYQXrjB9HLN2HVU1iKSviGc1LczvA3',
      img: zombie,
      name: 'redeye',
    },
  ];

  const [details, isDetails] = useState<any>(false);

  useEffect(() => {
    console.log('==>', window.location.pathname);
    if (window.location.pathname.length > 15) {
      isDetails(true);
    } else isDetails(false);
  });

  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <Box className={classes.headerContent}>
          <Box className={classes.tokenomics}>
            <Typography className={classes.title}>
              <img src={titleArrow} className={classes.titleArrow} />
              Baby Dragons
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.genesis}>
        <GridContainer spacing={4}>
          {dragonItems.map((item: IDragonList, index: number) => (
            <GridItem xs={12} sm={12} md={4} mt={7} mb={7} key={index}>
              <Box className={classes.card}>
                <Box className={classes.cardImgBox}>
                  <img src={item.img} className={classes.cardImg} />
                </Box>
                <Box className={classes.cardInfo}>
                  <p className={classes.cardTxt}>
                    {item.name} #{item.id}
                  </p>
                  <Link to={'/babydragons/#'} className={classes.connect}>
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
