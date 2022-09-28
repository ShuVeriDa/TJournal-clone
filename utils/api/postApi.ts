import {AxiosInstance} from "axios";
import {OutputData} from "@editorjs/editorjs";
import {PostType} from "./types";

export const PostApi = (instance: AxiosInstance) => ({
   getAll: async () => {
      const {data} = await instance.get<PostType>('/posts', )
      return data;
   },
   create: async (dto: { title: string; body: any[] }) => {
      const {data} = await instance.post<CreatePostDtoType, { data: PostType }>('/posts', dto)
      return data
   }
})

type CreatePostDtoType = {
   title: string
   body: OutputData['blocks']
}