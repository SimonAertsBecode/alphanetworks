import { useAxios } from '../utils/hooks/useAxios';

const CommentCount = ({ postId }: { postId: number }) => {
   const { datas: comments, error } = useAxios<[]>({
      method: 'get',
      url: `posts/${postId}/comments`,
   });

   if (!comments) return <p>{error}</p>;

   return (
      <td>
         comments <span>{comments.length.toString()}</span>
      </td>
   );
};

export default CommentCount;
