import { useParams } from "react-router-dom";
import { handleGetPostById } from "../services/handle";

const PostDetail = () => {
  const { id: postId } = useParams();

  const { isLoading, isError, data, error } = handleGetPostById(postId || "");

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Post Detail</h1>
      <h2>{data?.title}</h2>
      <p>Id: {data?.id}</p>
      <p>{data?.body}</p>
    </div>
  );
};

export default PostDetail;
