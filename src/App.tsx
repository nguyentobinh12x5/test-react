import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import PostList from "./pages/post/PostList";
import Layout from "./Layout";
import { FC } from "react";
import PostDetail from "./pages/post/PostDetail";
import CreatePost from "./pages/post/CreatePost";

interface AppProps {
  title: string;
}

const queryClient = new QueryClient();
const App: FC<AppProps> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<div>Not Found</div>} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/posts/create" element={<CreatePost />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
