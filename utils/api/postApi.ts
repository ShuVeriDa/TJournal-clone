import {AxiosInstance} from "axios";
import {OutputData} from "@editorjs/editorjs";
import {PostType} from "./types";

export const PostApi = (instance: AxiosInstance) => ({
   getAll: async () => {
      const {data} = await instance.get<PostType[]>('/posts', )
      return data;
   },
   getOne: async (id: number) => {
      const {data} = await instance.get<PostType>(`/posts/${id}` )
      return data;
   },
   create: async (dto: CreatePostDtoType) => {
      const {data} = await instance.post<CreatePostDtoType, { data: PostType }>('/posts', dto)
      return data
   },
   update: async (id: number, dto: CreatePostDtoType) => {
      const {data} = await instance.patch<CreatePostDtoType, { data: PostType }>(`/posts/${id}`, dto)
      return data
   },
})

type CreatePostDtoType = {
   title: string
   body: OutputData['blocks']
}