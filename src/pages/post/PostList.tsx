import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/PostService";
import { useNavigate } from "react-router-dom";
import { Post } from "../../types/post";
import "./PostList.css";

const PostList = () => {
  const navigate = useNavigate();
  const { isPending, isError, data, error } = useQuery<Post[]>({
    queryKey: ["Posts"],
    queryFn: getPosts,
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
        {data.map((Post) => (
          <div key={Post.id} className="post-card">
            <h3>{Post.title}</h3>
            <button onClick={() => navigate(`/posts/${Post.id}`)}>
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
