import {Paper, Typography} from '@material-ui/core';
import React from 'react';

import styles from './FullPost.module.scss';
import {OutputData} from "@editorjs/editorjs";

interface FullPostPropsType {
   title: string
   blocks: OutputData['blocks']
}

export const FullPost: React.FC<FullPostPropsType> = ({title, blocks}) => {
   return (
      <Paper elevation={0} className={styles.paper}>
         <div className="container">
            <Typography variant="h4" className={styles.title}>
               {title}
            </Typography>
            <div className={styles.text}>
               <Typography>
                  {blocks.map(obj => (
                     <Typography key={obj.id} dangerouslySetInnerHTML={{__html: obj.data.text}} />))
                  }
               </Typography>
            </div>
         </div>
      </Paper>
   );
};
