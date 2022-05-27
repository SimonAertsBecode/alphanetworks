import axios from 'axios';

const axiosApi = async (
   element: 'users' | 'comments' | `posts/${number}`,
   method: React.Dispatch<React.SetStateAction<never[]>>
) => {
   try {
      const request = await axios.get(`https://jsonplaceholder.typicode.com/${element}`);
      const response = request.data;
      console.log('apicalled');
      method(response);
   } catch (error) {
      throw error;
   }
};

export default axiosApi;
