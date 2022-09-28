import {Button, Input} from "@material-ui/core";
import dynamic from "next/dynamic";

import styles from './WriteForm.module.scss'
import {FC, useState} from "react";

const Editor = dynamic(() => import('../Editor').then(m => m.Editor), {ssr: false})

type WriteFormPropsType = {
   data?: string
}

export const WriteForm: FC<WriteFormPropsType> = ({data}) => {
   const [title, setTitle] = useState('')
   const [blocks, setBlocks] = useState([])

   return (
      <div>
         <Input value={title}
                onChange={e => setTitle(e.currentTarget.value)}
                placeholder="Заголовок"
                defaultValue={title}
                classes={{root: styles.titleField}}
         />
         <div className={styles.editor}>
            <Editor onChange={arr => setBlocks(arr)}/>
         </div>
         <Button variant="contained" color="primary">
            Опубликовать
         </Button>
      </div>
   );
};
