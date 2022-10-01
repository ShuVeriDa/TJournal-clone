import {FC, useState} from 'react';
import {Button, Input} from "@material-ui/core";
import styles from './AddCommentForm.module.scss'
import {Api} from "../../utils/api";
import {useAppSelector} from "../../redux/hooks";
import {selectUserData} from "../../redux/slices/userSlice";
import {CommentType} from "../../utils/api/types";

interface AddCommentFormPropsType {
   postId: number
   onSuccessAdd: (obj: CommentType) => void
}

export const AddCommentForm: FC<AddCommentFormPropsType> = ({postId, onSuccessAdd}) => {
   const [clicked, setClicked] = useState(false)
   const [isLoading, setIsLoading] = useState(false)
   const [text, setText] = useState('')

   const onAddComment = async () => {
      try {
         setIsLoading(true)
         const comment = await Api().comment.create({
            postId,
            text
         })
         onSuccessAdd(comment)
         setClicked(false)
         setText('')
      }
      catch (error) {
         console.warn('Add comment', error)
         alert("Ошибка при отправке комментария.")
      }
      finally {
         setIsLoading(false)
      }

   }


   return (
      <div className={styles.form}>
         <Input onChange={e => setText(e.currentTarget.value)}
                value={text}
                disabled={isLoading}
                onFocus={() => setClicked(true)}
                minRows={clicked ? 5 : 1}
                classes={{root: styles.fieldRoot}}
                placeholder="Написать комментарий..."
                fullWidth
                multiline
         />
         {clicked && <Button disabled={isLoading} onClick={onAddComment} className={styles.addButton} variant="contained" color="primary">
             Опубликовать
         </Button>}

      </div>
   );
};
