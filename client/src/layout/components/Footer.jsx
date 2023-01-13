import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import navlinks from "../navlinks/index.json";
import { AiOutlineMessage } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephoneInbound } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="page_container">
        <div className="container-fluid">
          <div className="row gx-5">
            <div className="col-4">
              <Logo />
              <br />
              <p className="text-white opacity-75 f14 lh-lg fw400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                totam quod illum itaque enim dolore quae suscipit error.
              </p>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-5 mx-auto">
                  <div className="mt-3">
                    <h2 className="text-white fw600">Social</h2>
                    <br />
                    <ul className="navlinks list-unstyled d-flex flex-column gap-3 mb-0">
                      {navlinks.map((content, i) => {
                        return (
                          <li key={i}>
                            <Link
                              className={`f15 text-decoration-none d-flex align-items-center gap-2`}
                              to={content.link}
                            >
                              <span className="hover">//</span>
                              <div>{content.label}</div>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <br />
              <br />
              <br />
              <div className="mt-3">
                <ul className="list-unstyled d-flex flex-column gap-4 mb-0">
                  <li>
                    <a
                      className="d-flex text-decoration-none gap-2 align-items-center f14 text-white"
                      href=""
                    >
                      <AiOutlineMessage color="#ff5a3c" fontSize={18} />
                      info@webmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex text-decoration-none gap-2 align-items-center f14 text-white"
                      href=""
                    >
                      <BsTelephoneInbound color="#ff5a3c" fontSize={18} />
                      737197319723
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex text-decoration-none gap-2 align-items-center f14 text-white"
                      href=""
                    >
                      <IoLocationOutline color="#ff5a3c" fontSize={18} />
                      Times Square, NYC
                    </a>
                  </li>
                </ul>
                <br />
                <ul className="list-unstyled d-flex ms-5 gap-3 mb-0">
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
                      <BsInstagram
                        className="icon"
                        color="#fff"
                        fontSize={17}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="bottom text-center py-4 text-white">
        All Rights Reserved @ Company 2023
      </div>
    </div>
  );
};

export default Footer;
