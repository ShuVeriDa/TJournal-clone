import {FC, useState} from 'react';
import {Button, Input} from "@material-ui/core";
import styles from './AddCommentForm.module.scss'

interface AddCommentFormPropsType {
}

export const AddCommentForm: FC<AddCommentFormPropsType> = () => {
   const [clicked, setClicked] = useState(false)
   const [text, setText] = useState('')

   const onAddComment = () => {
      setClicked(false)
      setText('')
   }
   return (
      <div className={styles.form}>
         <Input onChange={e => setText(e.currentTarget.value)}
                value={text}
                onFocus={() => setClicked(true)}
                minRows={clicked ? 5 : 1}
                classes={{root: styles.fieldRoot}}
                placeholder="Написать комментарий..."
                fullWidth
                multiline
         />
         {clicked && <Button onClick={onAddComment} className={styles.addButton} variant="contained" color="primary">
             Опубликовать
         </Button>}

      </div>
   );
};
