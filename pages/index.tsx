import {Post} from '../components/Post/Post';
import {MainLayout} from "../layouts/MainLayout";
import {Api} from "../utils/api";
import {NextPage} from "next";
import {PostType} from "../utils/api/types";

interface HomePropsType {
   posts: PostType[]
}

const Home: NextPage<HomePropsType> = ({posts}) => {
   return (
      <MainLayout>
         {
            posts.map((obj, index) => {
               return <Post key={obj.id} id={obj.id} title={obj.title}  description={obj.description}/>
            })
         }
      </MainLayout>

   );
}

export const getServerSideProps = async (ctx) => {
   try {
      const posts = await Api().post.getAll()
      return {
         props: {
            posts
         }
      }
   } catch (error) {
      console.log(error)
   }
   return {
      props: {
         posts: null
      }
   }
}

export default Home