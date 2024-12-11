import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPostByIdRequest } from "../services/request";
import { IPost } from "../interfaces/post";

const PostDetail = () => {
  const { id } = useParams();

  const { isLoading, isError, data, error } = useQuery<IPost>({
    queryKey: ["Post", id],
    queryFn: async () => {
      const response = await getPostByIdRequest(Number(id));
      return response.data;
    },
    enabled: !!id,
  });

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
