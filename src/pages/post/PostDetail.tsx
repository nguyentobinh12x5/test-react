import { useQuery } from "@tanstack/react-query";
import { getPost } from "../../services/PostService";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["Post", id],
    queryFn: () => getPost(id),
    enabled: !!id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Post Detail</h1>
      <h2>{data.title}</h2>
      <p>Id: {data.id}</p>
      <p>{data.body}</p>
    </div>
  );
};

export default PostDetail;
