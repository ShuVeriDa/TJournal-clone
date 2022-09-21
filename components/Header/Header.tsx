import React, {useState} from 'react';
import {Avatar, Button, IconButton, Paper} from '@material-ui/core';
import {
   ExpandMoreOutlined as ArrowBottom,
   Menu as MenuIcon,
   NotificationsNoneOutlined as NotificationIcon,
   SearchOutlined as SearchIcon,
   SmsOutlined as MessageIcon,
   AccountCircleOutlined as UserIcon
} from '@material-ui/icons';

import styles from './Header.module.scss';
import Link from "next/link";
import {AuthDialog} from "../AuthDialog/AuthDialog";

export const Header: React.FC = () => {
   const [authVisible, setAuthVisible] = useState(false);

   const openAuthDialog = () => {
      setAuthVisible(true);
   };

   const closeAuthDialog = () => {
      setAuthVisible(false);
   };

   return (
      <Paper classes={{root: styles.root}} elevation={0}>
         <div className="d-flex align-center">
            <IconButton>
               <MenuIcon/>
            </IconButton>
            <Link href="/">
               <a>
                  <img height={35} className="mr-20" src="/static/img/logo.svg" alt="logo"/>
               </a>
            </Link>

            <div className={styles.searchBlock}>
               <SearchIcon/>
               <input placeholder="Поиск"/>
            </div>

            <Link href="/write">
               <a>
                  <Button variant="contained" className={styles.penButton}>
                     Новая запись
                  </Button>
               </a>
            </Link>
         </div>
         <div className="d-flex align-center">
            <IconButton >
               <MessageIcon/>
            </IconButton>
            <IconButton>
               <NotificationIcon/>
            </IconButton>
            {/*<Link href={"/profile/1"}>*/}
            {/*   <a className="d-flex align-center">*/}
            {/*      <Avatar*/}
            {/*         className={styles.avatar}*/}
            {/*         alt="Remy Sharp"*/}
            {/*         src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"*/}
            {/*      />*/}
            {/*      <ArrowBottom/>*/}
            {/*   </a>*/}
            {/*</Link>*/}
            <div className={styles.loginButton} onClick={openAuthDialog}>
               <UserIcon />
               Войти
            </div>
         </div>
         <AuthDialog closeAuthDialog={closeAuthDialog} authVisible={authVisible}/>
      </Paper>
   );
};
