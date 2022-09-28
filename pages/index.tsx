import {Post} from '../components/Post/Post';
import {MainLayout} from "../layouts/MainLayout";

export default function Home() {
   return (
      <MainLayout>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
      </MainLayout>

   );
}