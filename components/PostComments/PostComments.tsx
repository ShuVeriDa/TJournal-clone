import {FC, useState} from 'react';
import {Divider, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import {Comment} from "../Comment";
import {AddCommentForm} from "../AddCommentForm/AddCommentForm";
import data from "../../Data"

type CommentType = {
   text: string
   id: number
   createdAt: string
   user: {
      fullname: string
      avatarUrl: string
   }
}

interface PostCommentsPropsType {

}

export const PostComments: FC<PostCommentsPropsType> = () => {
   const [activeTab, setActiveTab] = useState<number>(0)
   const comments = data.comments[activeTab === 0 ? "popular" : "new"]

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
            <Divider />
            <AddCommentForm />
            <div className="mb-20" />
            {
               comments.map(obj => <Comment key={obj.id}
                                         user={obj.user}
                                         text={obj.text}
                                         createdAt={obj.createdAt}
               />)
            }

         </Paper>
      </div>
   );
};
