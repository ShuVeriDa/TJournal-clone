import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ResponseUser} from "../../utils/api/types";
import {RootStateType} from "../store";

export interface InitialStateType {
   data: ResponseUser | null
}

const initialState: InitialStateType = {
   data: null
}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setUserData: (state, action: PayloadAction<ResponseUser>) => {
         state.data = action.payload
      }
   },
})

export const {setUserData} = userSlice.actions
export const selectUserData = (state: RootStateType) => state.user.data

   export const userReducer = userSlice.reducer