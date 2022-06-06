import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

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
      } catch (err) {
         const error = err as AxiosError;
         setError(error.message);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetch();
   }, []); //dependency warning about fetch fct ==> if put, infinite loop.

   return { datas, error, loading } as const;
};
