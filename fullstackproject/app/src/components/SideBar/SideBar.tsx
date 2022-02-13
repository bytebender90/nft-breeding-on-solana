import React, { FC, Fragment, ReactNode, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
//styles
import withStyles from './styles';
interface ISideBarProps {
  classes: any;
  menuContent: ReactNode;
  logo: string;
  sideLogo: string;
  openDrawer: boolean;
  toggleDrawer: () => void;
  sx?: any;
}
const SideBar: FC<ISideBarProps> = (props) => {
  const { classes, menuContent, logo, sideLogo, openDrawer, toggleDrawer, sx } =
    props;

  const sideContent = () => (
    <>
      <Box className={classes.sideLogoContent}>
        <Link to='/'>
          <img src={sideLogo} alt='logo' className={classes.sideLogo} />
        </Link>
      </Box>
      {menuContent}
      <Box sx={{ flex: 1 }} />
    </>
  );

  return (
    <>
      {/* <Box className={classes.root}>{sideContent()}</Box> */}
      <Drawer
        anchor='left'
        open={openDrawer}
        onClose={toggleDrawer}
        className={classes.drawerContent}
      >
        {sideContent()}
      </Drawer>
    </>
  );
};

export default withStyles(SideBar);
