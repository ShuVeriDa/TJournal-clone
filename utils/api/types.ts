import {OutputData} from "@editorjs/editorjs";
import {Post} from "@reduxjs/toolkit/src/query/tests/mocks/server";

export type LoginDto = {
   email: string
   password: string
}

export type CreateUserDto = {
   fullName: string
} & LoginDto

export type ResponseUser = {
   id: number
   email: string
   fullName: string
   token: string
   commentsCount?: number
   createdAt: string
   updatedAt: string
}
export type PostType = {
   title: string
   body: OutputData['blocks']
   description: string
   tags: null | string
   id: number
   views: null
   user: ResponseUser
   createdAt: string
   updatedAt: string
}

export type CommentType = {
   id: number
   text: string
   post: PostType
   user: ResponseUser
   createdAt: string
   updatedAt: string
}