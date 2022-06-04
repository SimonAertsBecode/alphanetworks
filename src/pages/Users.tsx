import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//**Componenents import */
import DisplayTable from '../components/DisplayTable';
import SearchBar from '../components/SearchBar';

//**Utils import */
import { useAxios } from '../utils/hooks/useAxios';
import { User } from '../utils/interface/interfaces';

const Users = () => {
   const navigate = useNavigate();

   const users = useAxios('users');

   const [searchUser, setSearchUser] = useState<string>('');

   const handleRoutes = <T,>(id: number, item: T) => {
      navigate(`posts/${id}`, { state: { item } });
   };

   const filteredUsers = () => {
      const filteredUsers = users.filter((user: User) => {
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
      <section className='table-user'>
         <h1>List of users</h1>
         <section className='search-bar'>
            <SearchBar setSearchUser={setSearchUser} />
         </section>
         <section className='container-table'>
            <table>
               <DisplayTable
                  objects={filteredUsers()}
                  properties={[{ key: 'name' }, { key: 'username' }, { key: 'email' }]}
                  navigation={handleRoutes}
               />
            </table>
         </section>
      </section>
   );
};

export default Users;
