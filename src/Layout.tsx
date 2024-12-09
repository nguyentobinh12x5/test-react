import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const Layout = () => {
  return (
    <div className="layout">
      <header className="header">
        <Navbar />
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; 2024 My Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
