import { useLocation, useNavigate, useParams } from 'react-router-dom';

//**Components import */
import DisplayTable from '../components/DisplayTable';

//**Utils import */
import { User } from '../utils/interface/userInterface';
import { useAxios } from '../utils/hooks/useAxios';

interface LocationState {
   item: User;
}

const UserPosts = () => {
   const location = useLocation();
   const navigate = useNavigate();

   // {userId : string} is mandatory otherwise 'userId' can be undefined
   const { userId } = useParams() as { userId: string };
   const { item: user } = location.state as LocationState;

   const posts = useAxios(`posts?userId=${parseInt(userId)}`);

   const goBack = () => {
      navigate(-1);
   };

   return (
      <section className='table-post'>
         <h2>{user.name}'s Posts</h2>
         <button onClick={goBack}>Go back</button>
         <section className='container-table'>
            <table>
               <DisplayTable objects={posts} properties={[{ key: 'title' }, { key: 'body' }]} children={true} />
            </table>
         </section>
      </section>
   );
};

export default UserPosts;