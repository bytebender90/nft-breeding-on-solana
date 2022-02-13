import { WalletContext } from 'contexts/WalletContext';
import { useContext } from 'react';

const useWallet = () => useContext(WalletContext);

export default useWallet;
