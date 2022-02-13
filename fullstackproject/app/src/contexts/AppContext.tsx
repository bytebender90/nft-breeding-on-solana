import React from 'react';
import ThemeProvider from './ThemeContext';
import WalletProvider from './WalletContext';

export interface AppContextsProps {
  locale?: string;
}

const AppContexts: React.FC<AppContextsProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <WalletProvider>{children}</WalletProvider>
    </ThemeProvider>
  );
};

export default AppContexts;
