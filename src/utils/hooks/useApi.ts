import { useState, useEffect, useCallback } from 'react';
import axiosApi from '../api/axiosApi';

export const useAxios = (element: 'users' | 'comments' | `posts?userId=${number}`) => {
   const [datas, setDatas] = useState([]);

   useEffect(() => {
      axiosApi(element, setDatas);
      console.log('api useEffect called');
   }, [element]);

   return datas;
};
