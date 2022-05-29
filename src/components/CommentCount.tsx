import { useAxios } from '../utils/hooks/useAxios';

const CommentCount = ({ postId }: { postId: number }) => {
   const comments = useAxios(`posts/${postId}/comments`);

   return (
      <td>
         comments <span>{comments.length.toString()}</span>
      </td>
   );
};

export default CommentCount;
