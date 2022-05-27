import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DisplayTable from '../components/DisplayTable';
import SearchBar from '../components/SearchBar';
import { useAxios } from '../utils/hooks/useApi';

import { user } from '../utils/interface/userInterface';

const Users = () => {
   const navigate = useNavigate();

   const users = useAxios('users');

   const [searchUser, setSearchUser] = useState<string>('');

   useEffect(() => {
      const test = users.filter((user: user) => {
         const { name, username, email } = user;
         const result =
            email.toLowerCase().includes(searchUser) || username.toLowerCase().includes(searchUser) || name.toLowerCase().includes(searchUser);

         return result;
      });

      console.log(test);
   }, [searchUser]);

   const handleRoute = (userId: number) => {
      navigate(`posts/${userId}`);
   };

   if (!users) return <p>Oops something went wrong while calling users...</p>;

   return (
      <section className='users'>
         <SearchBar setSearchUser={setSearchUser} />
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
               {users.map((user: user) => {
                  return (
                     <tr
                        key={user.id}
                        onClick={() => {
                           handleRoute(user.id);
                        }}
                     >
                        <DisplayTable id={user.id} name={user.name} username={user.username} email={user.email} />
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </section>
   );
};

export default Users;
