import { useAxios } from '../utils/hooks/useApi';
import { Location } from 'history';
import { useLocation, useParams } from 'react-router-dom';
import DisplayTable from '../components/DisplayTable';

const UserPosts = () => {
   // {userId : string} is mandatory otherwise 'userId' can be undefined
   const { userId } = useParams() as { userId: string };
   const { state } = useLocation();

   const post = useAxios(`posts?userId=${parseInt(userId)}`);

   return (
      <div>
         <table>
            <caption>user post</caption>
            <thead>
               <tr>
                  <th>title</th>
                  <th>content</th>
               </tr>
            </thead>
            <tbody>
               <DisplayTable objects={post} properties={[{ key: 'title' }, { key: 'body' }]} />
            </tbody>
         </table>
      </div>
   );
};

export default UserPosts;
