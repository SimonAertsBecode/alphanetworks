import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DisplayTable from '../components/DisplayTable';
import SearchBar from '../components/SearchBar';

import { useAxios } from '../utils/hooks/useApi';

import { user } from '../utils/interface/userInterface';

const Users = () => {
   const users = useAxios('users');

   const [searchUser, setSearchUser] = useState<string>('');

      const navigate = useNavigate();

      const handleRoute = (id: number, user: user) => {
         navigate(`posts/${id}`, { state: { user } });
      };

   const filteredUsers = () => {
      const filteredUsers = users.filter((user: user) => {
         const { name, username, email } = user;
         if (searchUser === '') {
            return users;
         } else {
            const result =
               email.toLowerCase().includes(searchUser) ||
               username.toLowerCase().includes(searchUser) ||
               name.toLowerCase().includes(searchUser);

            return result;
         }
      });

      return filteredUsers;
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
               <DisplayTable
                  objects={filteredUsers()}
                  properties={[{ key: 'name' }, { key: 'username' }, { key: 'email' }]}
                  navigation={handleRoute}
               />
            </tbody>
         </table>
      </section>
   );
};

export default Users;
