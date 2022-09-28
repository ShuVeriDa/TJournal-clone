import {Button, Input} from "@material-ui/core";
import dynamic from "next/dynamic";

import styles from './WriteForm.module.scss'
import {FC, useState} from "react";
import {Api} from "../../utils/api";

const Editor = dynamic(() => import('../Editor').then(m => m.Editor), {ssr: false})

type WriteFormPropsType = {
   data?: string
}

export const WriteForm: FC<WriteFormPropsType> = ({data}) => {
   const [isLoading, setIsLoading] = useState(false)
   const [title, setTitle] = useState('')
   const [blocks, setBlocks] = useState([])

   const onAddPost = async () => {
      try {
         setIsLoading(true)
         const post = await Api().post.create({
            title,
            body: blocks
         })
      } catch (error) {
         console.warn('Create post', error)
         alert(error)
      }  finally {
         setIsLoading(false)
      }
   }

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
         <Button disabled={isLoading} onClick={onAddPost} variant="contained" color="primary">
            Опубликовать
         </Button>
      </div>
   );
};
