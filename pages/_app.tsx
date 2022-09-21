import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from '../theme';

import '../styles/globals.css';
import 'macro-css';
import {Header} from "../components/Header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
       <Header />
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
}

export default MyApp;
