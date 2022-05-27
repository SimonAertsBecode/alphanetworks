import { useAxios } from '../utils/hooks/useApi';
import { useLocation, useParams } from 'react-router-dom';
import DisplayPosts from '../components/DisplayPosts';

const UserPosts = () => {
   // {userId : string} is mandatory otherwise 'userId' can be undefined
   const { userId } = useParams() as { userId: string };
   const location = useLocation();
   console.log(location);

   const posts = useAxios(`posts/${parseInt(userId)}`);

   return (
      <div>
         <h1>{location.state.user.name}</h1>
         <table>
            <caption></caption>
         </table>
         {/* <DisplayPosts posts={posts}/> */}
      </div>
   );
};

export default UserPosts;
