import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

export const useAxios = <T>(axiosParams: AxiosRequestConfig) => {
   const [datas, setDatas] = useState<T>();
   const [error, setError] = useState<string | null>(null);
   const [loading, setLoading] = useState(true);

   const fetch = async () => {
      try {
         const request = await axios.request(axiosParams);
         const response = request.data;
         setDatas(response);
      } catch (error) {
         setError(JSON.stringify(error));
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetch();
   }, []);

   return { datas, error, loading };
};
