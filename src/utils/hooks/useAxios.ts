import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxios = (url: 'users' | `posts?userId=${number}` | `posts/${number}/comments`) => {
   const [datas, setDatas] = useState([]);

   const fetch = async () => {
      try {
         const request = await axios.get(`https://jsonplaceholder.typicode.com/${url}`);
         const response = request.data;
         if (response) setDatas(response);
      } catch (error) {
         throw error;
      }
   };

   useEffect(() => {
      fetch();
   }, [url]);

   return datas;
};
