import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewPostRequest } from "../services/request";
import { ICreatePostCommand } from "../interfaces/post";

const CreatePost = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newPost: ICreatePostCommand) => createNewPostRequest(newPost),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "Posts" });
      setContent("");
      setTitle("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ title, body: content, userId: 0 });
  };

  return (
    <div>
      <h3>Create Post</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
      {mutation.isPending && <p>Creating post...</p>}
      {mutation.isError && <p>Error creating post: {mutation.error.message}</p>}
      {mutation.isSuccess && <p>Post created successfully!</p>}
    </div>
  );
};

export default CreatePost;
