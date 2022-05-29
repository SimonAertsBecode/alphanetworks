import { useAxios } from '../utils/hooks/useApi';
import { Location } from 'history';
import { useLocation, useParams } from 'react-router-dom';
import DisplayTable from '../components/DisplayTable';

import { user } from '../utils/interface/userInterface';

interface CustomizedState {
   user: user;
}

const UserPosts = () => {
   const location = useLocation();

   // {userId : string} is mandatory otherwise 'userId' can be undefined
   const { userId } = useParams() as { userId: string };
   const { user } = location.state as CustomizedState;

   const { datas: posts } = useAxios(`posts?userId=${parseInt(userId)}`);

   return (
      <div>
         <table>
            <caption>user {user.name}</caption>
            <DisplayTable objects={posts} properties={[{ key: 'title' }, { key: 'body' }]} />
         </table>
      </div>
   );
};

export default UserPosts;
