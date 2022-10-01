import {AxiosInstance} from "axios";
import {OutputData} from "@editorjs/editorjs";
import {CommentType, PostType} from "./types";

export const CommentApi = (instance: AxiosInstance) => ({
  getAll: async (postId: number | undefined) => {
    const {data} = await instance.get<CommentType[]>('/comments', {params: {postId}})
    return data
  },
  create: async (dto: CreateCommentDtoType) => {
    const {data} = await instance.post<CreateCommentDtoType, { data: CommentType }>('/comments', dto)
    return data
  },
  remove: async (id: number) => {
    return instance.delete(`/comments/${id}`)
  },
})

type CreateCommentDtoType = {
  postId: number
  text: string
}