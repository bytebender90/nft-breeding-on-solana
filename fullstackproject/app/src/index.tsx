import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import App from 'views/App';
import AppLayouts from 'layouts/app-layouts/AppLayouts';
import AppContext from 'contexts/AppContext';
import './style.css';
getChainOptions().then((chainOptions) => {
  ReactDOM.render(
    <WalletProvider {...chainOptions}>
      <AppContext>
        <StyledEngineProvider injectFirst>
          <BrowserRouter>
            <Switch>
              <AppLayouts>
                <App />
              </AppLayouts>
            </Switch>
          </BrowserRouter>
        </StyledEngineProvider>
      </AppContext>
    </WalletProvider>,
    document.getElementById('root')
  );
});
