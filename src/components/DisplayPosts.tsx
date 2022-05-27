import { post } from '../utils/interface/userInterface';

const DisplayPosts = ({ post }: { post: post }) => {
   return (
      <>
         <tr key={post.id}>
            <td>{post.title}</td>
            <td>{post.body}</td>
         </tr>
      </>
   );
};

export default DisplayPosts;
