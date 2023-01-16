import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../components/Logo";
import navlinks from "../navlinks/index.json";

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", function () {
      var header = document.querySelector(".navbar_container");
      if (header !== null) {
        header.classList.toggle("sticky", window.scrollY > 0);
        header.classList.toggle("shadow-sm", window.scrollY > 0);
      }
    });
  }, []);

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
                        "navlink"
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
