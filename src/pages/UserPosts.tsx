import { useAxios } from '../utils/hooks/useApi';
import { useParams } from 'react-router-dom';
import DisplayPosts from '../components/DisplayPosts';

const UserPosts = () => {
   // {userId : string} is mandatory otherwise 'userId' can be undefined
   const { userId } = useParams() as { userId: string };

   const posts = useAxios(`posts/${parseInt(userId)}`);


   return (
      <div>
         <h1>User post</h1>
         <DisplayPosts/>
      </div>
   );
};

export default UserPosts;
