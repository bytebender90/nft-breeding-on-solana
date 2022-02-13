import React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import classNames from 'classnames';
//styles
import withStyles from './styles';
import { padding } from '@mui/system';

interface IToggleSelectProps {
  classes: any;
  active: string | number;
  size: 'xs' | 'sm' | 'md';
  space?: number;
  fullWidth?: boolean;
  mt?: string;
  options: IToggleList[];
  round: boolean;
  pool?: string;
  align?: string;
  percent?: string;
  role?: string;
  title?: string;
  onChange: (value: string | number) => void;
  animation?: string;
}

export interface IToggleList {
  label: string | number;
  value: string | number;
  color?: string;
  align?: string;
  percent?: string;
  role?: string;
  title?: string;
}

const ToggleSelect = (props: IToggleSelectProps) => {
  const {
    classes,
    active,
    size,
    space = 1,
    fullWidth,
    mt,
    options,
    round,
    onChange,
    align,
    percent,
    role,
    title,
  } = props;

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return percent === 'percent' ? (
    <Grid container spacing={2}>
      {options.map((item: IToggleList, index: number) => (
        <Grid item xs={6} sm={4} md={4} lg={4} xl={2} key={index}>
          <Item
            className={classNames({
              [classes.gridItem]: true,
              [classes.active]: active === item.value,
              [classes.xs]: size === 'xs',
              [classes.round]: round,
              [classes.align]: align === 'center',
              [classes.percent]: percent === 'percent',
            })}
            onClick={() => onChange(item.value)}
            key={index}
          >
            {item.label}
          </Item>
        </Grid>
      ))}
    </Grid>
  ) : (
    <Stack
      justifyContent={align}
      alignItems='left'
      spacing={space}
      mt={mt}
      className={align === 'center' ? classes.swap : ''}
      direction={{ xs: 'row', sm: 'row', md: 'row' }}
    >
      {options.map((item: IToggleList, index: number) => (
        <Box
          className={classNames({
            [classes.item]: true,
            [classes.animation]: true,
            [classes.active]: active === item.value,
            [classes.xs]: size === 'xs',
            [classes.sm]: size === 'sm',
            [classes.md]: size === 'md',
            [classes.fullWidth]: fullWidth,
            [classes.round]: round,
            [classes.align]: align === 'center',
            [classes.percent]: percent === 'percent',
            [classes.lpToggle]: role === 'lp',
            // [classes.lpToggleTitle]: title === 'title',
          })}
          onClick={() => onChange(item.value)}
          key={index}
          sx={{
            color:
              item.color && active === item.value
                ? `${item.color}!important`
                : 'text.primary',
          }}
        >
          {item.label}
        </Box>
      ))}
    </Stack>
  );
};

export default withStyles(ToggleSelect);
