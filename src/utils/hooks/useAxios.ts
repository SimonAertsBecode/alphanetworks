import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

export const useAxios = <T>(axiosParams: AxiosRequestConfig) => {
   const [datas, setDatas] = useState<T>();
   const [error, setError] = useState<string | null>(null);
   const [loading, setLoading] = useState(true);

   const fetch = useCallback(async () => {
      try {
         const request = await axios.request(axiosParams);
         const response = request.data;
         setDatas(response);
         setTimeout(() => {
            setLoading(false);
         }, 2000);
      } catch (err) {
         const error = err as AxiosError;
         setError(error.message);
      }
   }, []);

   useEffect(() => {
      fetch();
   }, [fetch]);

   return { datas, error, loading };
};
