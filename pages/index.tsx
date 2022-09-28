import {Post} from '../components/Post/Post';
import {MainLayout} from "../layouts/MainLayout";
import {Api} from "../utils/api";
import {NextPage} from "next";

interface HomePropsType {
   posts: any[]
}

const Home: NextPage<HomePropsType> = ({posts}) => {
   return (
      <MainLayout>
         {
            posts.map(obj => {
               return <Post key={obj} />
            })
         }
      </MainLayout>

   );
}

export const getServerSideProps = async(ctx) => {
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