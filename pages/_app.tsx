import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from '../theme';

import '../styles/globals.css';
import 'macro-css';
import {Header} from "../components/Header/Header";
import {Provider} from "react-redux";
import {store} from "../redux/store";
import {AppProps} from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
       <Provider store={store} >
          <Header />
          <Component {...pageProps} />
       </Provider>
    </MuiThemeProvider>
  );
}

export default MyApp;
