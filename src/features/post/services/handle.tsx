import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ICreatePostCommand, IPost } from "../interfaces/post";
import {
  createNewPostRequest,
  getPostByIdRequest,
  getPostsRequest,
} from "./request";
import { toast } from "react-toastify";

const queryClient = new QueryClient();

export function handleGetPosts() {
  return useQuery({
    queryKey: ["Posts"],
    queryFn: async () => {
      const response: AxiosResponse<IPost[]> = await getPostsRequest();
      return response.data;
    },
  });
}

export function handleGetPostById(id: string) {
  return useQuery({
    queryKey: ["Post", id],
    queryFn: async () => {
      const response: AxiosResponse<IPost> = await getPostByIdRequest(id);
      return response.data;
    },
  });
}

export function handleCreatePosts() {
  return useMutation({
    mutationFn: async (newPost: ICreatePostCommand) => {
      const response: AxiosResponse<IPost> = await createNewPostRequest(
        newPost
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "Posts" });
      toast.success("Created successfully");
    },
    onError: (error: Error) => {
      toast.error(`${error.message}`);
    },
  });
}
