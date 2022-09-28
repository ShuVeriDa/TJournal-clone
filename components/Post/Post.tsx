import {FC} from 'react';
import {Paper, Typography} from '@material-ui/core';
import Image from 'next/image';

import styles from './Post.module.scss';
import Link from "next/link";

interface PostPropsType {
   id: number
   title: string
   description: string
   imageUrl?: string
}

export const Post: FC<PostPropsType> = ({id, title, imageUrl, description}) => {
   return (
      <Paper elevation={0} className="p-20" classes={{root: styles.paper}}>
         <Typography variant="h5" className={styles.title}>
            <Link href={`/news${id}`}>
               <a href="#">
                  {title}
               </a>
            </Link>
         </Typography>
         <Typography className="mt-10 mb-15">
            {description}
         </Typography>
         {imageUrl && (
            <Image
             src="https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp/"
             height={500}
             width={600}
             alt={title}
         />)}

      </Paper>
   );
};
