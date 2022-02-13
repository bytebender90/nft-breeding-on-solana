import React from 'react';
import MuiGrid, { GridProps } from '@mui/material/Grid';
import { ReactNode } from 'react';

interface GridContainerProps extends GridProps {
  children: ReactNode;
}
const GridContainer = (props: GridContainerProps) => {
  const { children, spacing = 3, justifyContent, alignItems } = props;
  return (
    <MuiGrid
      container
      justifyContent={justifyContent}
      alignItems={alignItems}
      spacing={spacing}
    >
      {children}
    </MuiGrid>
  );
};

export default GridContainer;
