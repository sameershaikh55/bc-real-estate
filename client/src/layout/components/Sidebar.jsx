import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import urls from "../navlinks/index.json";

const Sidebar = ({ isOpen, ClickEvent }) => {
  useEffect(() => {
    if (window.innerWidth < 575) {
      if (isOpen) {
        document.body.style.overflow = "hidden";

        if (window.scrollY === 0) {
          window.scrollTo(0, 1);
        }
      } else {
        document.body.style.overflow = "auto";

        if (window.scrollY === 1) {
          window.scrollTo(0, 0);
        }
      }
    } else {
      document.documentElement.style.overflowX = "hidden";
    }
  }, [isOpen]);

  return (
    <div
      onClick={ClickEvent}
      style={{
        opacity: `${isOpen ? "1" : "0"}`,
        top: `${isOpen ? "0%" : "-200%"}`,
      }}
      className="SideBarContainer"
    >
      <ul>
        {urls.map((item, i) => {
          return (
            <li className="fw500 text-white f28 pointer" key={i}>
              <NavLink to={item.link}>{item.label}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
