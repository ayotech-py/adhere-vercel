import React from "react";
import Header from "./Header/Header";
import { Footer } from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <header
        className="layout-header"
        style={{ position: "fixed", width: "100%", zIndex: 10 }}
      >
        <Header />
      </header>
      <main style={{ paddingTop: "100px", marginBottom: "70px" }}>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
