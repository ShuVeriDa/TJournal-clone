import React, {FC, useState} from 'react';
import {Button, Dialog, DialogContent, DialogContentText, Divider, TextField, Typography} from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack'


import styles from './AuthDialog.module.scss'
import {MainForm} from "../FollowButton/forms/MainForm";
import {LoginForm} from "../FollowButton/forms/LoginForm";
import {RegisterForm} from "../FollowButton/forms/RegisterForm";

interface AuthDialogPropsType {
   authVisible: boolean
   closeAuthDialog: () => void
}

export const AuthDialog: FC<AuthDialogPropsType> = ({authVisible, closeAuthDialog}) => {
   const [formType, setFormType] = useState<"main" | "login" | "register">('main')

   return (
      <div>
         <Dialog open={authVisible}
                 onClose={closeAuthDialog}
                 aria-labelledby="responsive-dialog-title"
                 maxWidth="sm"
                 fullWidth

         >
            <DialogContent>
               <DialogContentText>
                  <div className={styles.content}>
                     <Typography className={styles.title}>
                        {formType === "main" ? "Вход в TJ"
                              : <p onClick={() => setFormType("main")} className={styles.backTitle}>
                              <ArrowBackIcon /> К авторизации
                        </p>}
                     </Typography>
                     {formType === "main" && <MainForm onOpenLogin={() => setFormType('login')} />}
                     {formType === "login" && <LoginForm onOpenRegister={() => setFormType('register')} />}
                     {formType === "register" && <RegisterForm onOpenRegister={() => setFormType('register')} onOpenLogin={() => setFormType('login')}/>}

                  </div>
               </DialogContentText>
            </DialogContent>
         </Dialog>
      </div>
);
};
