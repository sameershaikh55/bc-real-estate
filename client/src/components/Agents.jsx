import React from "react";
import Button from "./Button";
import STtitle from "./STtitle";
import { CgFacebook } from "react-icons/cg";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const Agents = () => {
  const agents = [
    {
      profilePicture:
        "https://bootstrapmade.com/demo/templates/EstateAgency/assets/img/agent-4.jpg",
    },
    {
      profilePicture:
        "https://bootstrapmade.com/demo/templates/EstateAgency/assets/img/agent-1.jpg",
    },
    {
      profilePicture:
        "https://bootstrapmade.com/demo/templates/EstateAgency/assets/img/agent-5.jpg",
    },
  ];

  return (
    <div className="agents_container">
      <div className="page_container">
        <div className="container-fluid">
          <STtitle>Best Agents</STtitle>

          <div className="row">
            {agents.map(({ profilePicture }, i) => {
              return (
                <div key={i} className="col-md-4">
                  <div className="card-box-d">
                    <div className="card-img-d">
                      <img
                        src={profilePicture}
                        alt=""
                        className="img-d img-fluid"
                      />
                    </div>
                    <div className="card-overlay card-overlay-hover">
                      <div className="card-header-d">
                        <div className="card-title-d align-self-center">
                          <h3 className="title-d">
                            <a href="" className="link-two">
                              Margaret Sotillo
                              <br /> Escala
                            </a>
                          </h3>
                        </div>
                      </div>
                      <div className="card-body-d">
                        <p className="content-d color-text-a">
                          Sed porttitor lectus nibh, Cras ultricies ligula sed
                          magna dictum porta two.
                        </p>
                        <div className="info-agents color-a">
                          <p>
                            <strong>Phone: </strong> +54 356 945234
                          </p>
                          <p>
                            <strong>Email: </strong> agents@example.com
                          </p>
                        </div>
                      </div>
                      <div className="card-footer-d">
                        <div className="socials-footer d-flex justify-content-center">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a href="#" className="link-one">
                                <CgFacebook color="#fff" fontSize={30} />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#" className="link-one">
                                <BsTwitter color="#fff" fontSize={30} />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#" className="link-one">
                                <BsInstagram color="#fff" fontSize={30} />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#" className="link-one">
                                <BsLinkedin color="#fff" fontSize={30} />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4">
            <Button>
              <span className="opacity-0">....</span>
              view more
              <span className="opacity-0">....</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
