import { createContext, useState, FC, useMemo, useCallback } from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

import { darkTheme } from 'theme';

interface IContext {
  themeMode: PaletteMode;
  colorMode: () => void;
}
export const ThemeContext = createContext<Partial<IContext>>({});

const ThemeProvider: FC = ({ children }) => {
  const [themeMode, setThemeMode] = useState<PaletteMode>('dark');

  const colorMode = useCallback(
    () => setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')),
    []
  );
  const theme = useMemo(
    () =>
      createTheme({
        ...darkTheme,
        palette: {
          ...darkTheme.palette,
          mode: themeMode,
        },
      }),
    [themeMode]
  );

  const value = { themeMode, colorMode };
  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
