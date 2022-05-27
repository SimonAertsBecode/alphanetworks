import { useState, useEffect, useCallback } from 'react';
import axiosApi from '../api/axiosApi';

export const useAxios = (element: 'users' | 'comments' | `posts/${number}`) => {
   const [datas, setDatas] = useState([]);

   const fetch = useCallback(() => {
      axiosApi(element, setDatas);
   }, [element]);

   useEffect(() => {
      fetch();
   }, [fetch]);

   return datas;
};
