import { useAxios } from '../utils/hooks/useAxios';

const CommentCount = ({ postId }: { postId: number }) => {
   const comments = useAxios(`posts/${postId}/comments`);

   return (
     
         <span>{comments.length.toString()} comments on that post</span>
    
   );
};

export default CommentCount;
