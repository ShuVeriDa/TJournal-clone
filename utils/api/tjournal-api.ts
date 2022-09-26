import axios from "axios";
import {CreateUserDto, LoginDto, ResponseUser} from "./types";

const instance = axios.create({
   baseURL: 'http://localhost:7777/'
})

export const UserAPI = {
   register: async (dto: CreateUserDto) => {
      const {data} = await instance.post<CreateUserDto, { data: ResponseUser }>('/auth/register', dto)
      return data;
   },
   login: async (dto: LoginDto) => {
      const {data} = await instance.post<CreateUserDto, { data: ResponseUser }>('auth/login', dto)
      return data
   },
   getMe: async (token: string) => {
      const {data} = await instance.get<ResponseUser>('users/me', {
         headers: {
            Authorization: `Bearer ${token}`
         }
      })
      return data
   }
}