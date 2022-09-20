import {Button, Input} from "@material-ui/core";
import dynamic from "next/dynamic";

import styles from './WriteForm.module.scss'
import {FC} from "react";

const Editor = dynamic(() => import('../Editor').then(m => m.Editor), {ssr: false})

type WriteFormPropsType = {
   title?: string
}

export const WriteForm: FC<WriteFormPropsType> = ({title}) => {

   return (
      <div>
         <Input placeholder="Заголовок"
                defaultValue={title}
                classes={{root: styles.titleField}}
         />
         <div className={styles.editor}>
            <Editor/>
         </div>
         <Button variant="contained" color="primary">
            Опубликовать
         </Button>
      </div>
   );
};
