import React from "react";

// COMPONENTS
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Newsletter from "../components/Newsletter";

const Layout = ({ children }) => {
  return (
    <>
      <div className="header_container">
        <TopHeader />
        <Header />
      </div>
      {children}
      <Newsletter />
      <Footer />
    </>
  );
};

export default Layout;
