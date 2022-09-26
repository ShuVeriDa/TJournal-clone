import Head from 'next/head';

import { Header } from '../components/Header/Header';
import { LeftMenu } from '../components/LeftMenu/LeftMenu';
import { Post } from '../components/Post/Comment';
import { SideComments } from '../components/SideComments/SideComments';
import {GetServerSideProps} from "next";
import {wrapper} from "../redux/store";
import {parseCookies} from "nookies";
import {UserAPI} from "../utils/api/tjournal-api";
import {setUserData} from "../redux/slices/userSlice";

export default function Home() {
  return (
    <div>
      <Head>
        <title>RJournal</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"></link>
      </Head>
      {/*<Header />*/}
      <div className="wrapper">
        <div className="leftSide">
          <LeftMenu />
        </div>
        <div className="content">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="rightSide">
          <SideComments />
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps:GetServerSideProps = wrapper.getServerSideProps(
   (store) => async(ctx) => {
   try {
      const {authToken} = parseCookies(ctx)

      const userData = await UserAPI.getMe(authToken)

      store.dispatch(setUserData(userData))
      console.log(userData)

      return {props: {}}
   } catch (err) {
      console.log(err)
      return {props: {}}
   }
})