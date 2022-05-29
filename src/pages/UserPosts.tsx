import { useAxios } from '../utils/hooks/useAxios';
import { useLocation, useParams } from 'react-router-dom';
import DisplayTable from '../components/DisplayTable';
import CommentCount from '../components/CommentCount';

import { user } from '../utils/interface/userInterface';

interface CustomizedState {
   user: user;
}

const UserPosts = () => {
   const location = useLocation();

   // {userId : string} is mandatory otherwise 'userId' can be undefined
   const { userId } = useParams() as { userId: string };
   const { user } = location.state as CustomizedState;

   const posts = useAxios(`posts?userId=${parseInt(userId)}`);

   console.log(posts);

   return (
      <div>
         <table>
            <caption>{user.name}'s Posts</caption>
            <DisplayTable objects={posts} properties={[{ key: 'title' }, { key: 'body' }]} />
         </table>
         <section className='comments'>
            {posts.map((post: { id: number }) => {
               return <CommentCount postId={post.id} />;
            })}
         </section>
      </div>
   );
};

export default UserPosts;
