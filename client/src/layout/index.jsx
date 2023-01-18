import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// COMPONENTS
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Location from "./components/Location";
import Sidebar from "./components/Sidebar";

const Layout = ({ children }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const OnClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className="header_container">
        <TopHeader />
        <Header ClickEvent={OnClick} isOpen={isOpen} />
      </div>
      <Sidebar ClickEvent={OnClick} isOpen={isOpen} />
      {children}
      <Location />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Layout;
