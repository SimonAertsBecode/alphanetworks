import { post } from '../utils/interface/userInterface';

const DisplayPosts = ({ posts }: { posts: post[] }) => {
   return posts.map((post) => {
      return <p>{post.title}</p>;
   });
};

export default DisplayPosts;
