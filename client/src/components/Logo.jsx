import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ isOpen, ClickEvent }) => {
  function logoclick() {
    if (isOpen) {
      ClickEvent();
    }
  }

  return (
    <Link to="/" onClick={logoclick} className="text-decoration-none">
      <h1 className="logo d-flex align-items-center mb-0">
        <span className="lobster display-4 color1 fw700">BC</span>
        <span className="f14">Real State Team</span>
      </h1>
    </Link>
  );
};

export default Logo;
