import React from "react";
import Header from "./Header/Header";
import { Footer } from "./Footer/Footer";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header
        className="layout-header"
        style={{ position: "fixed", width: "100%", zIndex: 10 }}
      >
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
