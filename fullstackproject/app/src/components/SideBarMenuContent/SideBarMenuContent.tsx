import React, { FC } from 'react';
import Box from '@mui/material/Box';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { discord, twitter } from 'assets/images';
//component
import MenuItem from 'components/MenuItem';

//styles
import withStyles from './styles';

import { IRoutes } from 'router/Routes';

interface ISideBarMenuContentProps {
  classes: any;
  routes: IRoutes[];
  role: string;
  toggleDrawer: (drawer: string) => void;
}

const SideBarMenuContent: FC<ISideBarMenuContentProps> = (props) => {
  const { classes, routes, role, toggleDrawer } = props;

  const activeRouter = (path: string) => {
    if (
      path === '/ehecatldragons' &&
      window.location.pathname.includes('/ehecatldragons/')
    ) {
      return true;
    }
    return path === window.location.pathname;
  };

  return (
    // sx={{ display: { xs: 'flex', sm: 'none' } }}
    <>
      <Box
        className={classNames({
          [classes.root]: true,
          [classes.nav]: role == 'nav',
          [classes.side]: role == 'side',
        })}
      >
        {routes.map((item: IRoutes, index: number) => (
          <Link
            to={item.path}
            key={index}
            className={classNames({
              [classes.menuItem]: true,
              [classes.active]: activeRouter(item.path),
            })}
            onClick={() => toggleDrawer('false')}
          >
            <MenuItem
              label={item.label}
              key={index}
              active={activeRouter(item.path)}
            />
          </Link>
        ))}
      </Box>
    </>
  );
};

export default withStyles(SideBarMenuContent);
