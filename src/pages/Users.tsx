import { useState, useEffect } from 'react';
import DisplayTable from '../components/DisplayTable';
import axiosApi from '../utils/axiosApi';
import { userInfos } from '../utils/userInterface';

const Users = () => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      axiosApi('users', setUsers);
   }, []);

   if (!users) return <p>oops something went wrong while calling users...</p>;

   return (
      <section className='users'>
         <table>
            <caption>Users</caption>
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
               </tr>
            </thead>
            <tbody>
               {users.map((user: userInfos) => {
                  return <DisplayTable id={user.id} name={user.name} username={user.username} email={user.email} />;
               })}
            </tbody>
         </table>
      </section>
   );
};

export default Users;
