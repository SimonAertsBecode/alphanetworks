import axios from 'axios';

const axiosApi = async (element: string, method: React.Dispatch<React.SetStateAction<never[]>>) => {
   try {
      const request = await axios.get(`https://jsonplaceholder.typicode.com/${element}`);
      const response = request.data;
      method(response);
   } catch (error) {
      throw error;
   }
};

export default axiosApi;
