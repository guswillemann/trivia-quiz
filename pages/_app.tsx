import { Box, Container, Link, makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppProps } from 'next/app';
import React from 'react';
import Logo from '../src/components/Logo';
import SEO from '../src/components/SEO';
import { QuestionsProvider } from '../src/contexts/QuestionsContext';
import ThemeProvider from '../src/contexts/Theme';


const useStyles = makeStyles({
  gridContainer: {
    display: 'grid',
    gridTemplateRows: '15rem 1fr',
    justifyItems: 'center',
    alignItems: 'center',
  },
});

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const classes = useStyles();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <QuestionsProvider>
        <ThemeProvider>
          <CssBaseline />
          <Container maxWidth="sm">
            <SEO />
            <Box className={classes.gridContainer}>
              <Box>
                <Link href="/">
                  <Logo />
                </Link>
              </Box>
              <Box width="100%">
                <Component {...pageProps} />
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </QuestionsProvider>
    </React.Fragment>
  );
}
