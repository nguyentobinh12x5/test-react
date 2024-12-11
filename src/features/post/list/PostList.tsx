import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import "./PostList.css";
import { getPostsRequest } from "../services/request";
import { IPost } from "../interfaces/post";
import React from "react";
import { AxiosResponse } from "axios";

const PostList: React.FC = () => {
  const navigate = useNavigate();
  const { data, isPending, isError, error } = useQuery<
    AxiosResponse<IPost[]>,
    Error
  >({
    queryKey: ["Posts"],
    queryFn: getPostsRequest,
    // staleTime: 5000,
    // gcTime: 60000,
    // enabled: true,
  });
  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Post</h2>
      <button onClick={() => navigate("/posts/create")}>Create Post</button>
      <div className="post-list">
        {data.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <button onClick={() => navigate(`/posts/${post.id}`)}>
              Read more
            </button>
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
