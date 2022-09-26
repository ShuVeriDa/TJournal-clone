import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";

export const store = configureStore({
   reducer: {
      user: userReducer
   }
})

export type RootStateType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, Action<string>>