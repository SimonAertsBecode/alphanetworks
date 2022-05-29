import { useAxios } from '../utils/hooks/useAxios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import DisplayTable from '../components/DisplayTable';

import { User } from '../utils/interface/userInterface';

interface LocationState {
   user: User;
}

const UserPosts = () => {
   const location = useLocation();
   const navigate = useNavigate();

   // {userId : string} is mandatory otherwise 'userId' can be undefined
   const { userId } = useParams() as { userId: string };
   const { user } = location.state as LocationState;

   const posts = useAxios(`posts?userId=${parseInt(userId)}`);

   const goBack = () => {
      navigate(-1);
   };

   return (
      <section className='user-post'>
         <button onClick={goBack}>Go back</button>
         <table>
            <caption>{user.name}'s Posts</caption>
            <DisplayTable objects={posts} properties={[{ key: 'title' }, { key: 'body' }]} children={true} />
         </table>
         <section className='comments'></section>
      </section>
   );
};

export default UserPosts;
