import {GetServerSideProps, NextPage} from "next";
import {MainLayout} from "../../layouts/MainLayout";
import {WriteForm} from "../../components/WriteForm/WriteForm";
import {Api} from "../../utils/api";
import {PostType} from "../../utils/api/types";


interface WritePagePropsType {
   post: PostType
}

const WritePage: NextPage<WritePagePropsType> = ({post}) => {
   return (
      <MainLayout className='main-layout-white' hideComments hideMenu>
         <WriteForm data={post}/>
      </MainLayout>

   );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
   try {
      const id = ctx.params?.id
      const post = await Api(ctx).post.getOne(+id)
      const user = await Api(ctx).user.getMe()

      if (post.user.id !== user.id) {
         return {
            props: {},
            redirect: {
               destination: '/',
               permanent: false,
            }
         }
      }


      return {
         props: {
            post
         }
      }
   } catch (error) {
      console.log("Write page", error)
      return {
         props: {},
         redirect: {
            destination: '/',
            permanent: false
         }
      }
   }
}

export default WritePage