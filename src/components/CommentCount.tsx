import { useAxios } from '../utils/hooks/useAxios';

const CommentCount = ({ postId }: { postId: number }) => {
   const { datas: comments, error } = useAxios<[]>({
      method: 'get',
      url: `posts/${postId}/comments`,
   });

   //cannot set p or span as tags inside <tr>
   if (!comments) return <>{error}</>;

   return (
      <td>
         comments <span>{comments.length.toString()}</span>
      </td>
   );
};

export default CommentCount;
