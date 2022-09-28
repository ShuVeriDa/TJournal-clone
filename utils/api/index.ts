import {GetServerSidePropsContext, NextPageContext} from "next";
import Cookies, {parseCookies} from "nookies";
import axios from "axios";
import {UserAPI} from "./user-api";

export type ApiReturnType = {
   user: ReturnType<typeof UserAPI>
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
      user: UserAPI(instance)
   }
}