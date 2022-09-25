import React, {FC, useState} from 'react';
import {Button} from "@material-ui/core";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {LoginFormSchema} from '../../../utils/validations';
import {FormField} from "../../FormField";
import {CreateUserDto, LoginDto} from "../../../utils/api/types";
import {UserAPI} from "../../../utils/api/tjournal-api";
import {setCookie} from "nookies";
import {Alert} from "@material-ui/lab";

interface LoginFormPropsType {
   onOpenRegister: () => void
}

export const LoginForm: FC<LoginFormPropsType> = ({onOpenRegister}) => {
   const [errorMessage, setErrorMessage] = useState('')

   const form = useForm({
      mode: 'onChange',
      resolver: yupResolver(LoginFormSchema)
   })

   const onSubmit = async(dto: LoginDto) => {
      try {
         const data = await UserAPI.login(dto)
         console.log(data)
         setCookie(null, "authToken", data.token, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
         })
         setErrorMessage('')
      } catch (err) {
         console.warn("Authorization error", err)
         if(err.response) {
            setErrorMessage(err.response.data.message)
         }
      }
   };
   console.log()

   return (
      <div>
         <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
               <FormField name={'email'} label={"Почта"} />
               <FormField name={'password'} label={'Пароль'} />
               {errorMessage && <Alert severity='error' className="mb-10">{errorMessage}</Alert>}
               <div className="d-flex align-center justify-between">
                  <Button disabled={!form.formState.isValid || form.formState.isSubmitting} type="submit" color="primary" variant="contained">
                     Войти
                  </Button>
                  <Button onClick={onOpenRegister} color="primary" variant="text">
                     Регистрация
                  </Button>
               </div>
            </form>
         </FormProvider>
      </div>
   );
};
