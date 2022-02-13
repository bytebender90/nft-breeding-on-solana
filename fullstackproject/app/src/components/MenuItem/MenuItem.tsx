import React, { FC, ReactNode } from 'react';
import Box from '@mui/material/Box';
import TypoGraphy from '@mui/material/Typography';
import classNames from 'classnames';
//styles
import withStyles from './styles';

interface IMenuItemProps {
  classes: any;
  icon: ReactNode;
  label: string;
  active: boolean;
  id: string;
}
const MenuItem: FC<IMenuItemProps> = (props) => {
  const { classes, icon, label, active, id } = props;
  return (
    <Box
      className={classNames({
        [classes.root]: true,
        [classes.active]: active,
      })}
    >
      <TypoGraphy className={classes.label}>{label}</TypoGraphy>
    </Box>
  );
};

export default withStyles(MenuItem);
