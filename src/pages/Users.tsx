import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DisplayTable from '../components/DisplayTable';
import SearchBar from '../components/SearchBar';

import { useAxios } from '../utils/hooks/useAxios';

import { user } from '../utils/interface/userInterface';

const Users = () => {
   const users = useAxios('users');

   const [searchUser, setSearchUser] = useState<string>('');

   const navigate = useNavigate();

   const handleRoutes = useCallback(
      (id: number, user: user) => {
         navigate(`posts/${id}`, { state: { user } });
      },
      [navigate]
   );

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
         <section className='search_bar'>
            <SearchBar setSearchUser={setSearchUser} />
         </section>
         <table>
            <caption>List of users</caption>
            <DisplayTable
               objects={filteredUsers()}
               properties={[{ key: 'name' }, { key: 'username' }, { key: 'email' }]}
               navigation={handleRoutes}
            />
         </table>
      </section>
   );
};

export default Users;
