import React from "react";
import Layout from "../features/layout/Layout";

interface Props {
  children: React.ReactNode;
}

const PublicRoute: React.FC<Props> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default PublicRoute;
