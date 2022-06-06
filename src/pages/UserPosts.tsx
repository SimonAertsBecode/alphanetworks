import { useLocation, useNavigate, useParams } from 'react-router-dom';

//**Components import */
import DisplayTable from '../components/DisplayTable';
import Loading from '../components/Loading';

//**Utils import */
import { Post, User } from '../utils/interface/interfaces';
import { useAxios } from '../utils/hooks/useAxios';

interface LocationState {
   item: User;
}

const UserPosts = () => {
   const location = useLocation();
   const navigate = useNavigate();

   const { userId } = useParams();
   const { item: user } = location.state as LocationState;

   const {
      datas: posts,
      error,
      loading,
   } = useAxios<Post[]>({
      method: 'get',
      url: `posts?userId=${parseInt(userId!)}`,
   });

   if (!posts) return <p>{error}</p>;

   const goBack = () => {
      navigate(-1);
   };

   return (
      <section className='table-post'>
         <h2>{user.name}'s Posts</h2>
         <button onClick={goBack}>Go back</button>
         <section className='container-table'>
            <Loading loading={loading} item={`Getting ${user.name}'s posts...`}>
               <table>
                  <DisplayTable objects={posts} properties={[{ key: 'title' }, { key: 'body' }]} children={true} />
               </table>
            </Loading>
         </section>
      </section>
   );
};

export default UserPosts;
