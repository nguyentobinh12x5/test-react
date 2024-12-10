import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const PostList = lazy(() => import("./list/PostList"));
const PostDetail = lazy(() => import("./detail"));
const CreatePost = lazy(() => import("./create"));
const Posts = () => {
  return (
    <Routes>
      <Route path="*" element={<PostList />} />
      <Route path="create" element={<CreatePost />} />
      <Route path=":id" element={<PostDetail />} />
    </Routes>
  );
};

export default Posts;
