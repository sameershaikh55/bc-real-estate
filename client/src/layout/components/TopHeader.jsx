import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { CgFacebook } from "react-icons/cg";
import { BsTwitter, BsInstagram } from "react-icons/bs";

const TopHeader = () => {
  return (
    <div className="top_container">
      <div className="page_container w-100">
        <div className="container-fluid">
          <div className="d-flex justify-content-between w-100">
            <ul className="list-unstyled d-flex gap-4 mb-0">
              <li>
                <a
                  className="d-flex text-decoration-none gap-2 align-items-center f14 text-white"
                  href=""
                >
                  <AiOutlineMessage color="#ff5a3c" fontSize={18} />
                  info@webmail.com
                </a>
              </li>
              <li className="d-none d-sm-block">
                <a
                  className="d-flex text-decoration-none gap-2 align-items-center f14 text-white"
                  href=""
                >
                  <IoLocationOutline color="#ff5a3c" fontSize={18} />
                  Times Square, NYC
                </a>
              </li>
            </ul>
            <ul className="list-unstyled d-flex gap-3 mb-0">
              <li>
                <a href="#" title="Facebook">
                  <CgFacebook className="icon" color="#fff" fontSize={17} />
                </a>
              </li>
              <li>
                <a href="#" title="Twitter">
                  <BsTwitter className="icon" color="#fff" fontSize={17} />
                </a>
              </li>
              <li>
                <a href="#" title="Instagram">
                  <BsInstagram className="icon" color="#fff" fontSize={17} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
