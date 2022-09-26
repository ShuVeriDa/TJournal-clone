import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import {userReducer} from "./slices/userSlice";

export function makeStore() {
   return configureStore({
      reducer: {
         user: userReducer
      }
   })
}

export const store = makeStore()

export type RootStoreType = ReturnType<typeof makeStore>
export type RootStateType = ReturnType<RootStoreType['getState']>
export type AppDispatchType = typeof store.dispatch
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, Action<string>>

export const wrapper = createWrapper<RootStoreType>(makeStore, {debug: true});
