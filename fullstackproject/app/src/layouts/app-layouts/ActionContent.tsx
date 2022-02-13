import React, { FC } from 'react';
import { WalletInfo } from '@terra-money/wallet-provider';
import Button from 'components/Button';
import WalletInfoCom from 'components/WalletInfo';
import WalletModal from 'components/Modal';
import MenuIcon from '@mui/icons-material/Menu';
//styles
import withStyles from './styles';
interface IActionContentProps {
  classes: any;
  walletInfo: WalletInfo;
  USTAmount: number | null;
  ANCAmount: number | null;
  LunaAmount: number | null;
  handleWalletConnect: () => void;
  disconnect: () => void;
  toggleDrawer: () => void;
}
const ActionContent: FC<IActionContentProps> = (props) => {
  const {
    classes,
    walletInfo,
    USTAmount,
    LunaAmount,
    ANCAmount,
    handleWalletConnect,
    disconnect,
    toggleDrawer,
  } = props;

  return (
    <div>
      <MenuIcon
        className={classes.mMenu}
        onClick={toggleDrawer}
        sx={{ display: { xs: 'block', md: 'none' }, marginBottom: 1 }}
      />
    </div>
  );
};

export default withStyles(ActionContent);
