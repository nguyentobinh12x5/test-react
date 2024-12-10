import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <Navbar />
      </header>
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
