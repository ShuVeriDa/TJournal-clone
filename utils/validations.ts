import * as yup from 'yup'

export const LoginFormSchema = yup.object().shape({
   email: yup.string().email("Неверная почта").required("Почта обязательная"),
   password: yup.string().min(6, "Длина пароля должна быть не менее 6 символов").required("Пароль обязательный")
})

export const RegisterFormSchema = yup.object().shape({
   fullName: yup.string().required("Имя и Фамилия обязательны")
}).concat(LoginFormSchema)