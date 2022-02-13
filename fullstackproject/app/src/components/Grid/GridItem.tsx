import React from 'react';
import MuiGrid, { GridProps } from '@mui/material/Grid';
import { ReactNode } from 'react';

interface GridItemProps extends GridProps {
  children: ReactNode;
}
const GridItem = (props: GridItemProps) => {
  const { children, ...rest } = props;
  return (
    <MuiGrid item {...rest} style={{ margin: '0' }}>
      {children}
    </MuiGrid>
  );
};

export default GridItem;
