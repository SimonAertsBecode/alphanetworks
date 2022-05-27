import axios from 'axios';

interface fetch {
   element: 'users' | 'comments' | 'posts';
   method: any;
   axiosAPi(): Promise<void>;
}

const axiosApi = async (element: 'users' | 'comments' | 'posts', method: React.Dispatch<React.SetStateAction<never[]>>) => {
   try {
      const request = await axios.get(`https://jsonplaceholder.typicode.com/${element}`);
      const response = request.data;
      method(response);
   } catch (error) {
      console.log(error);
   }
};

export default axiosApi;
