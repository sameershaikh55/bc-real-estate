import React from "react";

// COMPONENTS
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="header_container">
        <TopHeader />
        <Header />
      </div>
      {children}
    </>
  );
};

export default Layout;
