import React, { FC, Fragment } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
//styles
import withStyles from './styles';
interface ICardHeaderProps {
  classes: any;
  titleImage?: string;
  title: string;
  subTitle?: string;
  unit?: string;
  divider: boolean;
  label?: string;
}

const CardHeader: FC<ICardHeaderProps> = (props) => {
  const { classes, titleImage, title, subTitle, unit, divider, label } = props;
  return (
    <Fragment>
      <Box className={classes.headerRoot}>
        {titleImage ? (
          <div className={classes.titleImage}>
            <img src={titleImage} alt='titleImage' />
          </div>
        ) : (
          <div
            className={label === 'tvl' ? classes.tvlSpace : classes.poolSpace}
          ></div>
        )}
        <div>
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.subTitle}>
            {subTitle} <small>{unit}</small>
          </Typography>
        </div>
      </Box>
      {divider && <Divider />}
    </Fragment>
  );
};

export default withStyles(CardHeader);
