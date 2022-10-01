import {FC, useEffect, useState} from 'react';
import {Divider, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import {Comment} from "../Comment/Comment";
import {AddCommentForm} from "../AddCommentForm/AddCommentForm";
import data from "../../Data"
import {Api} from "../../utils/api";
import {CommentType} from "../../utils/api/types";
import {useAppSelector} from "../../redux/hooks";
import {selectUserData} from "../../redux/slices/userSlice";
import {useComments} from "../../hooks/useComments";

interface PostCommentsPropsType {
  postId: number
}

export const PostComments: FC<PostCommentsPropsType> = ({postId}) => {
  const userData = useAppSelector(selectUserData)
  const [activeTab, setActiveTab] = useState<number>(0)
  const {comments, setComments} = useComments(postId)

  const onAddComment = (obj: CommentType) => {
    setComments(prev => [...prev, obj])
  }

  const onRemoveComment = (id: number) => {
    setComments(prev => prev.filter(obj => obj.id !== id))
  }

  return (
    <div className="container">
      <Paper elevation={0} className="mt-40 p-30">
        <Typography variant='h6' className='mb-20'>
          42 комментария
        </Typography>
        <Tabs onChange={(_, newValue) => setActiveTab(newValue)}
              className='mt-20'
              value={activeTab}
              indicatorColor="primary"
              textColor="primary"
        >
          <Tab label="Популярные"/>
          <Tab label="По порядку"/>
        </Tabs>
        <Divider/>
        {userData && <AddCommentForm onSuccessAdd={onAddComment} postId={postId}/>}
        <div className="mb-20"/>
        {
          comments.map(obj => <Comment key={obj.id}
                                       id={obj.id}
                                       user={obj.user}
                                       text={obj.text}
                                       createdAt={obj.createdAt}
                                       currentUserId={userData.id}
                                       onRemove={onRemoveComment}
          />)
        }

      </Paper>
    </div>
  );
};
