import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { motion } from 'framer-motion';

//**Components import */
import DisplayTable from '../components/DisplayTable';
import Loading from '../components/Loading';

//**Utils import */
import { User, Post } from '../utils/interface/interfaces';
import { useAxios } from '../utils/hooks/useAxios';

interface LocationState {
   item: User;
}

const titleAnimation = {
   visible: {
      x: 0,
      opacity: 0.9,
      transition: {
         duration: 1,
      },
   },
   hidden: {
      opacity: 0,
      x: '50vh',
   },
};

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
         <motion.h2 initial='hidden' animate='visible' variants={titleAnimation}>
            {user.name}'s Posts
         </motion.h2>
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
