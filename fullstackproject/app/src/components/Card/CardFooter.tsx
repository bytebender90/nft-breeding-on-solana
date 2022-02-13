import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//styles
import withStyles from './styles';
interface ICardFooterProps {
  classes: any;
  titleImage?: string;
  title: string;
  subTitle?: string;
  unit?: string;
  divider: boolean;
}

const CardFooter: FC<ICardFooterProps> = (props) => {
  const { classes, titleImage, title, subTitle, unit } = props;
  return (
    <Box className={classes.headerRoot} sx={{ mt: '8px' }}>
      {titleImage && (
        <div className={classes.titleImage}>
          <img src={titleImage} alt='titleImage' />
        </div>
      )}
      <div>
        <Typography className={classes.footerTitle}>{title}</Typography>
        <Typography className={classes.subTitle}>
          {subTitle} <small>{unit}</small>
        </Typography>
      </div>
    </Box>
  );
};

export default withStyles(CardFooter);
