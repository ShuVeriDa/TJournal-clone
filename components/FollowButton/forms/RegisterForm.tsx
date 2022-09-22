import React, {FC} from 'react';
import {Button, TextField} from "@material-ui/core";
import {useForm, FormProvider} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {LoginFormSchema, RegisterFormSchema} from '../../../utils/validations';
import {FormField} from "../../FormField";

interface RegisterFormPropsType {
   onOpenRegister: () => void
   onOpenLogin: () => void
}

export const RegisterForm: FC<RegisterFormPropsType> = ({onOpenRegister, onOpenLogin}) => {
   const form = useForm({
      mode: 'onChange',
      resolver: yupResolver(RegisterFormSchema)
   })

   const onSubmit = (data: any) => console.log(data);
   return (
      <div>
         <FormProvider {...form}>
            <FormField name={'fullname'} label={'Имя и Фамилия'} />
            <FormField name={'email'} label={"Почта"} />
            <FormField name={'password'} label={'Пароль'} />
            <form onSubmit={form.handleSubmit(onSubmit)}>
               <div className="d-flex align-center justify-between">
                  <Button disabled={!form.formState.isValid} onClick={onOpenRegister} type="submit" color="primary" variant="contained">
                     Зарегистрироваться
                  </Button>
                  <Button onClick={onOpenLogin} color="primary" variant="text">
                     Войти
                  </Button>
               </div>
            </form>
         </FormProvider>
      </div>
   );
};
