import { useState, useEffect } from 'react';
import axiosApi from '../api/axiosApi';

export const useAxios = (element: 'users' | `posts?userId=${number}` | `posts/${number}/comments`) => {
   const [datas, setDatas] = useState([]);

   useEffect(() => {
      axiosApi(element, setDatas);
   }, [element]);

   return datas;
};
