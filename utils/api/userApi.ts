import {AxiosInstance} from "axios";
import {CreateUserDto, LoginDto, ResponseUser} from "./types";

export const UserApi = (instance: AxiosInstance) => ({
   register: async (dto: CreateUserDto) => {
      const {data} = await instance.post<CreateUserDto, { data: ResponseUser }>('/auth/register', dto)
      return data;
   },
   login: async (dto: LoginDto) => {
      const {data} = await instance.post<CreateUserDto, { data: ResponseUser }>('auth/login', dto)
      return data
   },
   getMe: async () => {
      const {data} = await instance.get<ResponseUser>('users/me')
      return data
   }
})