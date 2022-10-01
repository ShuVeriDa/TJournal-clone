import React, {useState} from 'react';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';

import styles from './SideComments.module.scss';
import data from "../../Data"
import {CommentItem} from "../CommentItem/CommentItem";
import clsx from "clsx";
import {useComments} from "../../hooks/useComments";

export const SideComments = () => {
   const [visible, setVisible] = useState<boolean>(true)
  const {comments} = useComments()

   const toggleVisible = () => {
      setVisible(!visible)
   }

  return (
    <div className={clsx(styles.root, !visible && styles.rotated)}>
      <h3 onClick={toggleVisible}>
        Комментарии <ArrowRightIcon />
      </h3>
      {visible && comments.map((obj, i) => (
        <CommentItem key={obj.id} {...obj} />
      ))}
    </div>
  );
};
