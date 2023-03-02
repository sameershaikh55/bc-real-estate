import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { BiExit } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/action/auth";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const [sideBar, setSideBar] = useState(false);

  return (
    <div className="layout_container d-flex">
      <Sidebar sideBar={sideBar} setSideBar={setSideBar} />
      <div className="w-100">
        <div className="header_container shadow-sm d-flex justify-content-between align-items-center px-4 w-100">
          <div className="d-flex align-items-center">
            <GiHamburgerMenu
              onClick={() => setSideBar(!sideBar)}
              fontSize="1.4rem"
              className="pointer hamb color3"
            />
          </div>
          <div className="d-flex align-items-center">
            <div className="top_side d-none d-md-flex align-items-center ps-4">
              <div className="d-flex flex-column">
                <h5 className="mb-0 ms-3 fw600 color3">{user.email}</h5>
              </div>
            </div>
            <BiExit
              onClick={() => dispatch(logout())}
              className="ms-0 ms-md-4 pointer color3"
              fontSize="1.5rem"
            />
          </div>
        </div>
        {/* CHILDREN */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
