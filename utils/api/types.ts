import {OutputData} from "@editorjs/editorjs";

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
   createdAt: string
   updatedAt: string

}