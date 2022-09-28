import {AxiosInstance} from "axios";

export const PostApi = (instance: AxiosInstance) => ({
   getAll: async () => {
      const {data} = await instance.get('/posts', )
      return data;
   },
})