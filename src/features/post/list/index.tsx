import { useNavigate } from "react-router-dom";
import "./PostList.css";
import React from "react";
import { handleGetPosts } from "../services/handle";
import { CREATE_POST_PATH } from "../constants/create-post";

const PostList: React.FC = () => {
  const navigate = useNavigate();
  const { data: posts, isPending, isError, error } = handleGetPosts();
  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;
  const hanleCreatePost = () => {
    navigate(`${CREATE_POST_PATH}`);
  };
  return (
    <div>
      <button onClick={hanleCreatePost}>Create Post</button>
      <div className="post-list">
        {posts?.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <button onClick={() => navigate(`${post.id}`)}>Read more</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PostList;

//Notes:
// We are using the useQuery hook to fetch the data from the API.
// When we reload or back to this page react query will check the key if it has fetched it before
// and automatically get the data from the cache.
// Faster and more efficient than the traditional way of fetching data.
// Reduce the number of requests to the server.
//Different between isLoading and isPending. Is Loading follow enable = false/ initial fetch, isPending follow enable = true
