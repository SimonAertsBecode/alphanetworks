import axios from 'axios';

const axiosApi = async (
   element: 'users' | `posts?userId=${number}` | `posts/${number}/comments`,
   method: React.Dispatch<React.SetStateAction<never[]>>
) => {
   try {
      const request = await axios.get(`https://jsonplaceholder.typicode.com/${element}`);
      const response = request.data;
      if (response) method(response);
   } catch (error) {
      throw error;
   }
};

export default axiosApi;
