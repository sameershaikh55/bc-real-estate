import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaRegTimesCircle } from "react-icons/fa";

const Sidebar = ({ sideBar, setSideBar }) => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Properties" },
    { to: "/buy-inquiry", label: "Buy Inquiry" },
    // { to: "/sell-inquiry", label: "Sell Inquiry" },
  ];

  const navLinks = [
    { to: "/contact", text: "Contact" },
    { to: "/newsletter", text: "Newsletter" },
    { to: "/promocode", text: "Promocode" },
    // { to: "/video-shorts", text: "Video Shorts" },
    // { to: "/testimonials", text: "Testimonials" },
    { to: "/team", text: "Team" },
    { to: "/users", text: "Users" },
  ];

  useEffect(() => {
    if (sideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sideBar]);

  return (
    <div
      className={`${
        (sideBar && "sidebarActive") || "nonActiveSidebar"
      } sidebar_container`}
    >
      <div className="top_side d-flex align-items-center justify-content-between ps-4 pe-3 w-100">
        <div className="d-flex align-items-center">
          <p className="mb-0 ms-2 fw600 color3">BC REAL ESTATE</p>
        </div>
        <FaRegTimesCircle
          onClick={() => setSideBar(!sideBar)}
          fontSize="1.8rem"
          className="pointer hamb color3"
        />
      </div>
      <div className="home_side px-3 pt-3 pb-1">
        <p className="fw600 color2 ps-3 mb-3">Home</p>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={`${location.pathname === link.to ? "activeNav" : ""}`}
          >
            <div className="mt-1 d-flex align-items-center position-relative">
              <div className="img1"></div>
              <p className="mb-0">{link.label}</p>
            </div>
          </NavLink>
        ))}
      </div>
      <hr />
      <div className="manage_side px-3 pt-2 pb-1">
        <p className="fw600 color2 ps-3 mb-3">Manage</p>
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            className={`${
              (location.pathname === link.to && "activeNav") || ""
            }`}
          >
            <div className="mt-1 d-flex align-items-center position-relative">
              <div className="img1"></div>
              <p className="mb-0">{link.text}</p>
            </div>
          </NavLink>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Sidebar;
