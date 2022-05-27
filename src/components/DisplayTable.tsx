import React from 'react';
import { userInfos } from '../utils/userInterface';

const DisplayTable: React.FC<userInfos> = ({ id, name, username, email }) => {
   return (
      <tr>
         <th>{name}</th>
         <td>{username}</td>
         <td>{email}</td>
      </tr>
   );
};

export default DisplayTable;
