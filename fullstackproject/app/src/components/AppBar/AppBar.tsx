import React, { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { discord, twitter } from 'assets/images';
import withStyles from './styles';
interface IAppBarProps {
  classes: any;
  logo: string;
  actionContent: ReactNode;
  menuContent: ReactNode;
  headerContext: ReactNode;
  pageTitle: string;
}
const AppBar: FC<IAppBarProps> = (props) => {
  const {
    classes,
    logo,
    actionContent,
    menuContent,
    headerContext,
    pageTitle,
  } = props;
  return (
    <div
      style={{
        background: 'rgb(227 186 51)',
        backdropFilter: 'blur(40px)',
      }}
    >
      <MuiAppBar position='static' elevation={0} className={classes.root}>
        <div style={{ float: 'left' }}>
          <Box className={classes.logoContent}>
            <Link to='/'>
              <img src={logo} alt='logo' className={classes.logo} />
            </Link>
          </Box>
        </div>
        <div style={{ float: 'right', display: 'flex' }}>
          <Box>{menuContent}</Box>
          <Box>{headerContext}</Box>
          <div className={classes.social}>
            <a href='https://discord.gg/QzfPwHaH' target='_blank'>
              <img src={discord} alt='discord' className={classes.discord} />
            </a>
            <a href='https://twitter.com/EhecatlDragons/' target='_blank'>
              <img src={twitter} alt='twitter' className={classes.twitter} />
            </a>
          </div>
          {/* <Box sx={{ flex: 1 }} /> */}
          {actionContent}
          {/* </div> */}
        </div>
      </MuiAppBar>
    </div>
  );
};

export default withStyles(AppBar);
