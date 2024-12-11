import { lazy } from "react";
import { HOME, POSTS, ABOUT } from "../constants/pages";
import { Route, Routes } from "react-router-dom";
import PublicRoute from "./PublicRoute";

const Home = lazy(() => import("../features/home/Home"));
const About = lazy(() => import("../features/about"));
const Posts = lazy(() => import("../features/post"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={HOME}
        element={
          <PublicRoute>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path={ABOUT}
        element={
          <PublicRoute>
            <About />
          </PublicRoute>
        }
      />
      <Route
        path={POSTS}
        element={
          <PublicRoute>
            <Posts />
          </PublicRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
