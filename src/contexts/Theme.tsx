import { useMediaQuery } from '@material-ui/core';
import { createTheme, Theme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { ReactNode, useMemo } from 'react';

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    defaultGradient: string;
  }
  interface ThemeOptions {
    defaultGradient: string;
  }
}

export const themeObject = {
  defaultGradient: 'linear-gradient(120deg, #028A38 0%, #25A737 100%)',
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.25rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: '0.80rem',
    },
  },
  palette: {
    primary: {
      main: '#028A38',
      contrastText: '#fff',
    },
    secondary: {
      main: '#25A737',
      contrastText: '#fff',
    },
  },
};

type ThemeProviderProps = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const isDarkType = useMediaQuery('(prefers-color-scheme: dark)');

  const theme: Theme = useMemo(() => createTheme({
    ...themeObject,
    palette: {
      ...themeObject.palette,
      type: isDarkType ? 'dark' : 'light',
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            overflowY: 'scroll',
            paddingBottom: '2rem',
            backgroundImage: 'url("/background.svg")',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            '@media screen and (min-width: 600px)': {
              backgroundPositionY: '-15rem',
              fontSize: '12px',
            },
            '@media screen and (min-width: 960px)': {
              backgroundPositionY: '-30rem',
              fontSize: '14px',
            },
            '@media screen and (min-width: 1280px)': {
              backgroundPositionY: '-45rem',
              fontSize: '16px',
            },
            '@media screen and (min-width: 1920px)': {
              backgroundPositionY: '-60rem',
              fontSize: '20px',
            },
          },
        },
      },
    },
  }), [isDarkType]);
  
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
}
