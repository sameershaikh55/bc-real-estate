import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// COMPONENTS
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Location from "./components/Location";

const Layout = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className="header_container">
        <TopHeader />
        <Header />
      </div>
      {children}
      <Location />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Layout;
