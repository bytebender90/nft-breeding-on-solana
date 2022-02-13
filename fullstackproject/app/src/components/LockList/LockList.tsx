import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import withStyles from './styles';

interface ILockListProps {
  classes: any;
  list: IList[];
  width: boolean;
}

export interface IList {
  label: string;
  value: string;
  unit: string;
  color: string;
}

const LockList = (props: ILockListProps) => {
  const { classes, list } = props;
  return (
    <Stack
      spacing={2}
      direction={{
        xs: 'column',
        sm: 'row',
        md: 'row',
        lg: 'row',
      }}
    >
      {list.map((item: IList, index: number) => (
        <Box className={classes.item} key={index}>
          <div className={classes.itemLabel}>
            <Box
              className={classes.itemColor}
              sx={{ backgroundColor: item.color }}
            />
            <Typography
              variant='caption'
              sx={{ opacity: 0.75 }}
              display='block'
            >
              {item.label}
            </Typography>
          </div>
          <Typography className={classes.itemValue}>
            {item.value} {item.unit}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default withStyles(LockList);
