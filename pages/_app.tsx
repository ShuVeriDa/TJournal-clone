import {MuiThemeProvider, CssBaseline} from '@material-ui/core';
import {theme} from '../theme';

import '../styles/globals.css';
import 'macro-css';
import {Header} from "../components/Header/Header";
import {Provider} from "react-redux";
import {store, wrapper} from "../redux/store";
import {AppProps} from "next/app";

function MyApp({Component, pageProps}: AppProps) {
   return (
      <MuiThemeProvider theme={theme}>
         <CssBaseline/>

         <Header/>
         <Component {...pageProps} />

      </MuiThemeProvider>
   );
}

export default wrapper.withRedux(MyApp, {debug: true});
