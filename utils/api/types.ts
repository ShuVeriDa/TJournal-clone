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