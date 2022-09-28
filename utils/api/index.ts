import {GetServerSidePropsContext, NextPageContext} from "next";
import Cookies, {parseCookies} from "nookies";
import axios from "axios";
import {UserApi} from "./userApi";
import {PostApi} from "./postApi";

export type ApiReturnType = {
   user: ReturnType<typeof UserApi>
   post: ReturnType<typeof PostApi>
}

export const Api = (ctx?: NextPageContext | GetServerSidePropsContext): ApiReturnType => {
   const cookies = ctx ? Cookies.get(ctx) : parseCookies()
   const token = cookies.rtoken

   const instance = axios.create({
      baseURL: 'http://localhost:7777/',
      headers: {
         Authorization: "Bearer " + token
      }
   })

   return {
      user: UserApi(instance),
      post: PostApi(instance)
   }
}