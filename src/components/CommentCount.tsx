import { useAxios } from '../utils/hooks/useAxios';
//`posts/${postId}/comments`

const CommentCount = ({ postId }: { postId: number }) => {
   const {
      datas: comments,
      error,
      loading,
   } = useAxios<[{}]>({
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
