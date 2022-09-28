import {Paper, Typography} from '@material-ui/core';
import React from 'react';

import styles from './FullPost.module.scss';

interface FullPostProps {

}

export const FullPost: React.FC<FullPostProps> = () => {
  return (
    <Paper elevation={0} className={styles.paper}>
      <div className="container">
        <Typography variant="h4" className={styles.title}>
         Superjet, летящий из Волгограда В Москву, подал сигнал бедствия. Возможно в полете произошла разгерметизация.
        </Typography>
        <div>
          <Typography>
            Самолет SSJ100, летящий из Волгограда в МосквуЮ подал сигнал бедствия.
          </Typography>
        </div>
      </div>
    </Paper>
  );
};
