import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GridContainer from 'components/Grid/GridContainer';
import { dragonsLogo, titleArrow, laser, layoutBgImage } from 'assets/images';
import GridItem from 'components/Grid/GridItem';
import withStyles from './styles';
interface IDashboardProps {
  classes: any;
}
const DashBoard: FC<IDashboardProps> = (props) => {
  const { classes } = props;

  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <Box className={classes.headerContent}>
          <img src={dragonsLogo} className={classes.imgDragon} />
          <Typography className={classes.txt}>
            An Exclusive collection of 1111 Adult Dragon and 2222 Baby Dragon
            NFTs on the Solana Blockchain
          </Typography>
          <img src={laser} className={classes.dragonAnimation} />
        </Box>
      </Box>

      <Box className={classes.tokenomicsWrap}>
        <Typography className={classes.title}>
          <img src={titleArrow} className={classes.titleArrow} />
          TOKENOMICS
        </Typography>
        <Box className={classes.eds}>
          <Box>
            <Typography className={classes.edsTitle}>
              <span>$EDS Ehecatl Dragon Souls.</span>
            </Typography>
            <Typography className={classes.loreTxt}>
              Found over the centuries of dead Ehecatl Dragons, their souls are
              harvested.
            </Typography>
            <Typography className={classes.loreTxt}>
              EDS will be harvested weekly and given to their rightful owners in
              the Ehecatl Collection
            </Typography>
            <Typography className={classes.loreTxt}>
              EDS will play a vital role in bringing the Ehecatl population back
              to their former glory, it will be a use for trade and much more.
            </Typography>
          </Box>
        </Box>
        <Box className={classes.supply}>
          <Typography className={classes.sTitle}>SUPPLY</Typography>
          <GridContainer spacing={0}>
            <GridItem
              xs={12}
              sm={12}
              md={6}
              mt={7}
              mb={7}
              className={classes.tokenomicBox}
            >
              <div className={classes.supplyItem}>
                <div className={classes.supplyTitle}>
                  <strong>1111</strong> <p>Gensis Ehecatl Dragons</p>
                </div>
                <div className={classes.supplyDescription}>
                  <p>40 tokens a week</p>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} mt={7} mb={7}>
              <div className={classes.supplyItem}>
                <div className={classes.supplyTitle}>
                  <strong>2222</strong> <p>Baby Dragons</p>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </Box>
        <Box className={classes.utility}>
          <Typography className={classes.sTitle}>EDS Utility</Typography>
          <GridContainer spacing={0}>
            <GridItem
              xs={12}
              sm={12}
              md={12}
              mt={7}
              mb={7}
              className={classes.tokenomicBoxUtility}
            >
              <div className={classes.utilityItem}>
                <div className={classes.supplyTitle}>
                  <strong>
                    EDS will be used for breeding baby dragons. Max breeding
                    supply of 1111.
                  </strong>
                </div>
                <div className={classes.supplyDescription}>
                  <p>Staking</p>
                  <p>Trading</p>
                  <p>Merch and much more.</p>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </Box>
        <Box className={classes.supply}>
          <Typography className={classes.sTitle}>Breeding Dynamic</Typography>
          <GridContainer spacing={0}>
            <GridItem
              xs={12}
              sm={12}
              md={3}
              mt={7}
              mb={7}
              className={classes.tokenomicBox}
            >
              <div className={classes.breedingItem}>
                <Typography style={{ fontSize: '20px', marginTop: '30px' }}>
                  2 dragons + 300 EDS -
                </Typography>
              </div>
            </GridItem>
            <GridItem
              xs={12}
              sm={12}
              md={3}
              mt={7}
              mb={7}
              className={classes.tokenomicBox}
            >
              <div className={classes.breedingItem}>
                <Typography style={{ fontSize: '20px', marginTop: '30px' }}>
                  Breeding of Egg 24 hr wait -
                </Typography>
              </div>
            </GridItem>
            <GridItem
              xs={12}
              sm={12}
              md={3}
              mt={7}
              mb={7}
              className={classes.tokenomicBox}
            >
              <div className={classes.breedingItem}>
                <Typography
                  style={{
                    fontSize: '20px',
                    marginTop: '30px',
                    marginBottom: '30px',
                  }}
                >
                  Baby Dragon + 2 Adult dragons back.
                </Typography>
              </div>
            </GridItem>
            <GridItem
              xs={12}
              sm={12}
              md={3}
              mt={7}
              mb={7}
              className={classes.tokenomicBox}
            >
              <div className={classes.breedingItem}>
                <Typography style={{ fontSize: '20px', marginTop: '30px' }}>
                  Lose the 300 EDS
                </Typography>
              </div>
            </GridItem>
          </GridContainer>
        </Box>
      </Box>
      <Box className={classes.tokenomics}>
        <Typography className={classes.title}>
          <img src={titleArrow} className={classes.titleArrow} />
          THE EHECATL ROADMAP
        </Typography>

        <div className={classes.roadMapWap}>
          <div className={classes.roadMapTitle}>
            PHASE 1 : <span>COMPLETED</span>
          </div>
          <div className={classes.roadMapTxt}>
            <span>1</span> - UNIVEILING OUR WEBSITE
          </div>
          <div className={classes.roadMapTxt}>
            <span>2</span> - EHECATL DRAGONS MINT
          </div>
          <div className={classes.roadMapTxt}>
            <span>3</span> - DAO CREATION
          </div>
          <div className={classes.roadMapTxt}>
            <span>4</span> - SALES AND LISTING BOT
          </div>
        </div>

        <div className={classes.roadMapWap}>
          <div className={classes.roadMapTitle}>
            PHASE 2 : <span>WORKING</span>
          </div>
          <div className={classes.roadMapTxt}>
            <span>1</span> - CREATION OF THE EDS TOKEN
          </div>
          <div className={classes.roadMapTxt}>
            <span>2</span> - WEEKLY AIRDROPS
          </div>
          <div className={classes.roadMapTxt}>
            <span>3</span> - WEBSITE REDESIGN
          </div>
          <div className={classes.roadMapTxt}>
            <span>4</span> - EHECATL BABY DRAGONS:
          </div>
          <div className={classes.roadMapTxt}>
            &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;MINT AND BREEDING
          </div>
        </div>

        <div className={classes.roadMapWap}>
          <div className={classes.roadMapTitle}>
            PHASE 3 : <span>INCOMING</span>
          </div>
          <div className={classes.roadMapTxt}>
            <span>1</span> - WEEKLY LORE
          </div>
          <div className={classes.roadMapTxt}>
            <span>2</span> - LISTING EDS TOKEN ON <label>DEX</label>S
          </div>
          <div className={classes.roadMapTxt}>
            <span>3</span> - MERCH &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
            <span>4</span> - STAKING
          </div>
          <div className={classes.roadMapTxt}>
            <span>5</span> - DRAGONBORN PREVIEW AND MINT
          </div>
          <div className={classes.roadMapTxt}>
            {' '}
            <span>6</span> - MUTATIONS
          </div>
        </div>

        <div className={classes.roadMapWap}>
          <div className={classes.roadMapTitle}>AND EVEN MORE TO COME...</div>
        </div>
      </Box>
      <Box className={classes.tokenomics}>
        <Typography className={classes.title}>
          <img src={titleArrow} className={classes.titleArrow} />
          FAQ
        </Typography>

        <Typography className={classes.faqQ}>
          Where can i buy the Ehecatl Collections?
        </Typography>
        <Typography className={classes.faqA}>
          Our Authorized secondary marketplaces are only Magic Eden and
          Solanart. Please only use these websites as unauthorized marketplces
          may result in fraud, fake NFTs and scams.
        </Typography>

        <Typography className={classes.faqQ}>
          How many Dragons do I need to breed?
        </Typography>
        <Typography className={classes.faqA}>
          You will need two dragons and 300 $EDS to be able to breed. Each
          dragon receives 40 EDS per week.
        </Typography>

        <Typography className={classes.faqQ}>
          Is there any utility for the baby dragon collection?
        </Typography>
        <Typography className={classes.faqA}>
          Yes, we will be giving 50% of the royalties to holders in SOL
          airdropped straight to their wallets weekly.
        </Typography>

        <Typography className={classes.faqQ}>Will there be a DAO?</Typography>
        <Typography className={classes.faqA}>
          Yes we already have a DAO setup in our discord, just verify using the
          Solaland verification method in our discord and you will see our DAO
          section.
        </Typography>
      </Box>
    </Box>
  );
};

export default withStyles(DashBoard);
