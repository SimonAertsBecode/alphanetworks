import { Route, Navigate, Routes as Routing } from 'react-router-dom';
import UserPosts from '../pages/UserPosts';
import Users from '../pages/Users';

const Routes = () => {
   return (
      <Routing>
         <Route index element={<Users />} />
         <Route path='posts/:userId' element={<UserPosts />} />
         <Route path='*' element={<Navigate to='/' />} />
      </Routing>
   );
};

export default Routes;
