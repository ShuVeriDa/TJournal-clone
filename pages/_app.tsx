import {CssBaseline, MuiThemeProvider} from '@material-ui/core';
import {theme} from '../theme';

import '../styles/globals.css';
import 'macro-css';
import {Header} from "../components/Header/Header";
import {wrapper} from "../redux/store";
import {AppProps} from "next/app";
import {setUserData} from "../redux/slices/userSlice";
import {Component} from "react";
import {Api} from '../utils/api';
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
   return (
      <>
         <Head>
            <title>RJournal</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
               href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
               rel="stylesheet"></link>
         </Head>
         <MuiThemeProvider theme={theme}>
            <CssBaseline/>

            <Header/>
            <Component {...pageProps} />

         </MuiThemeProvider>
      </>

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
