import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../components/Logo";

const Header = () => {
  const location = useLocation();

  const navlinks = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Properties",
      link: "/homes",
    },
    {
      label: "Our agents",
      link: "/agents",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="navbar_container">
      <div className="page_container">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between w-100">
            <Logo />{" "}
            <ul className="navlinks list-unstyled d-flex gap-3 mb-0">
              {navlinks.map((content, i) => {
                return (
                  <li key={i}>
                    <Link
                      className={`f15 text-decoration-none ${
                        (location.pathname === content.link && "active") ||
                        "text-white"
                      }`}
                      to={content.link}
                    >
                      {content.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
