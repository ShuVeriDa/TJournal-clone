import React, {ChangeEvent, useEffect, useState} from 'react';

import { Paper, Button, IconButton, Avatar, ListItem, List } from '@material-ui/core';

import {
  AccountCircleOutlined as UserIcon,
  ExpandMoreOutlined as ArrowBottom,
  Menu as MenuIcon,
  NotificationsNoneOutlined as NotificationIcon,
  SearchOutlined as SearchIcon,
  SmsOutlined as MessageIcon
} from '@material-ui/icons';

import styles from './Header.module.scss';
import Link from "next/link";
import {AuthDialog} from "../AuthDialog/AuthDialog";
import {useAppSelector} from "../../redux/hooks";
import {selectUserData} from "../../redux/slices/userSlice";
import {PostType} from "../../utils/api/types";
import {Api} from "../../utils/api";

export const Header: React.FC = () => {
  const userData = useAppSelector(selectUserData)
  const [authVisible, setAuthVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('')
  const [posts, setPosts] = useState<PostType[]>([])

  const openAuthDialog = () => {
    setAuthVisible(true);
  };

  const closeAuthDialog = () => {
    setAuthVisible(false);
  };

  useEffect(() => {
    if (authVisible && userData) {
      setAuthVisible(false)
    }
  }, [authVisible, userData])

  const handleChangeInput = async(e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
    try {
      const {items} = await Api().post.search({title: e.currentTarget.value})
      setPosts(items)

    } catch (error) {
      console.warn(error)
    }
  }

  return (
    <Paper classes={{root: styles.root}} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon/>
        </IconButton>
        <Link href="/">
          <a>
            <img height={35} className="mr-20" src="/logo.svg" alt="logo"/>
          </a>
        </Link>

        <div className={styles.searchBlock}>
          <SearchIcon />
          <input value={searchValue} onChange={handleChangeInput} placeholder="Поиск" />
          {posts.length > 0 && (
            <Paper className={styles.searchBlockPopup}>
              <List>
                {posts.map((obj) => (
                  <Link key={obj.id} href={`/news/${obj.id}`}>
                    <a>
                      <ListItem button>{obj.title}</ListItem>
                    </a>
                  </Link>
                ))}
              </List>
            </Paper>
          )}
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
        <IconButton>
          <MessageIcon/>
        </IconButton>
        <IconButton>
          <NotificationIcon/>
        </IconButton>
        {userData
          ? <Link href={"/profile/1"}>
            <a className="d-flex align-center">
              <Avatar
                className={styles.avatar}
                alt="Remy Sharp"
                src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
              />
              <ArrowBottom/>
            </a>
          </Link>
          : <div className={styles.loginButton} onClick={openAuthDialog}>
            <UserIcon/>
            Войти
          </div>
        }
      </div>
      <AuthDialog closeAuthDialog={closeAuthDialog} authVisible={authVisible}/>
    </Paper>
  );
};
