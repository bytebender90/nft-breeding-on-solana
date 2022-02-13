import { FC, useMemo } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import {
  useConnectedWallet,
  CreateTxFailed,
  Timeout,
  TxFailed,
  TxUnspecifiedError,
  UserDenied,
} from '@terra-money/wallet-provider';
import AppBar from 'components/AppBar';
import SideBar from 'components/SideBar';
import SideBarMenuContent from 'components/SideBarMenuContent';
import SideBarHeaderContent from 'components/SideBarMenuContent';
// import navBarMenuContent from 'components/NavBarMenuContent';
import ActionContent from './ActionContent';
import useWallet from 'hooks/useWallet';
import { sideLogo, logo, layoutBgImage } from 'assets/images';
import withStyles from './styles';
import { routes } from 'router/Routes';
import { Typography } from '@mui/material';
interface ILayoutsProps {
  classes: any;
}

const AppLayouts: FC<ILayoutsProps> = (props) => {
  const { classes, children } = props;

  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);

  const toggleDrawer = (drawer?: string) => {
    drawer === 'false' ? setOpenDrawer(false) : setOpenDrawer(!openDrawer);
  };

  const appBarTitle = useMemo(() => {
    if (window.location.pathname == '/stake/lp') {
      return { label: 'Stake' };
    }
    return routes.find((item) => item.path === window.location.pathname);
  }, [window.location.pathname]);

  return (
    <div
      className={classes.root}
      style={{
        background: 'rgb(22, 9, 4)',
        backgroundImage: `url(${layoutBgImage})`,
        backgroundSize: '100%',
      }}
    >
      <AppBar
        logo={sideLogo}
        menuContent={
          <SideBarMenuContent
            routes={routes}
            role='nav'
            toggleDrawer={toggleDrawer}
          />
        }
        actionContent={<ActionContent toggleDrawer={toggleDrawer} />}
        pageTitle={appBarTitle?.label}
      />
      <Box className={classes.container}>
        <SideBar
          menuContent={
            <SideBarMenuContent
              routes={routes}
              role='side'
              toggleDrawer={toggleDrawer}
            />
          }
          logo={logo}
          sideLogo={sideLogo}
          openDrawer={openDrawer}
          toggleDrawer={toggleDrawer}
        />
        <div className={classes.content + ' children'}>{children}</div>
      </Box>
      <Box>
        <Typography
          style={{
            textAlign: 'center',
            fontSize: '18px',
            marginBottom: '10px',
          }}
        >
          © 2022 by Ehecatl Dragon NFT.
        </Typography>
      </Box>
    </div>
  );
};

export default withStyles(AppLayouts);
