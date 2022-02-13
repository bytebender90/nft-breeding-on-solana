import React, { FC } from 'react';
import Paper from '@mui/material/Paper';
//styles
import withStyles from './styles';
interface ICardProps {
  classes: any;
}
const Card: FC<ICardProps> = (props) => {
  const { classes, children } = props;
  return <Paper className={classes.root}>{children}</Paper>;
};

export default withStyles(Card);
