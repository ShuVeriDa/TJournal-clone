import {MuiThemeProvider, CssBaseline} from '@material-ui/core';
import {theme} from '../theme';

import '../styles/globals.css';
import 'macro-css';
import {Header} from "../components/Header/Header";
import {Provider} from "react-redux";
import {store, wrapper} from "../redux/store";
import {AppProps} from "next/app";
import {parseCookies} from "nookies";
import {UserAPI} from "../utils/api/user-api";
import {setUserData} from "../redux/slices/userSlice";
import {Component} from "react";
import { Api } from '../utils/api';

function MyApp({Component, pageProps}: AppProps) {
   return (
      <MuiThemeProvider theme={theme}>
         <CssBaseline/>

         <Header/>
         <Component {...pageProps} />

      </MuiThemeProvider>
   );
}

MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async ({ctx, Component}) =>
{
   try {
      const userData = await Api(ctx).user.getMe()

      store.dispatch(setUserData(userData))
   } catch (err) {
      if (ctx.asPath === '/write') {
         ctx.res?.writeHead(302, {
            Location: '/403'
         })
         ctx.res?.end()
      }
      console.log(err)
   }

   return {
      pageProps: {
         ...(Component.getInitialProps ? await Component.getInitialProps({...ctx, store}) : {}),
      }
   }
})

export default wrapper.withRedux(MyApp);
