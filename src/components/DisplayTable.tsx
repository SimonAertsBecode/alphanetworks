import React from 'react';
import { user } from '../utils/interface/userInterface';

const DisplayTable: React.FC<user> = ({ name, username, email }) => {
   return (
      <>
         <th>{name}</th>
         <td>{username}</td>
         <td>{email}</td>
      </>
   );
};

export default DisplayTable;
