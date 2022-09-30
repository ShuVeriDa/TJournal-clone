import {Button, Input} from "@material-ui/core";
import dynamic from "next/dynamic";

import styles from './WriteForm.module.scss'
import {FC, useState} from "react";
import {Api} from "../../utils/api";
import {PostType} from "../../utils/api/types";
import {useRouter} from "next/router";

const Editor = dynamic(() => import('../Editor').then(m => m.Editor), {ssr: false})

type WriteFormPropsType = {
   data?: PostType
}

export const WriteForm: FC<WriteFormPropsType> = ({data}) => {
   const router = useRouter()

   const [isLoading, setIsLoading] = useState(false)
   const [title, setTitle] = useState(data?.title || '')
   const [blocks, setBlocks] = useState(data?.body || "")

   const onAddPost = async () => {
      try {
         setIsLoading(true)
         const obj = {
            title,
            body: blocks
         }
         if (!data) {
            await Api().post.create(obj)
            await router.push(`write/${post.id}`)

         } else {
            await Api().post.update(data.id, obj)
         }

      } catch (error) {
         console.warn('Create post', error)
         alert(error)
      } finally {
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
            <Editor initialBlocks={data?.body} onChange={arr => setBlocks(arr)}/>
         </div>
         <Button disabled={isLoading || !blocks.length || !title} onClick={onAddPost} variant="contained" color="primary">
            {data ? 'Сохранить' : "Опубликовать"}
         </Button>
      </div>
   );
};
