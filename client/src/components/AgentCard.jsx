import React from "react";
import { CgFacebook } from "react-icons/cg";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { useSelector } from "react-redux";

const AgentCard = ({
  memberImage,
  name,
  phone,
  email,
  shortIntro,
  facebook,
  instagram,
  twitter,
  linkdin,
}) => {
  const { team_url } = useSelector((state) => state.pictureUrl);

  return (
    <div className="agent_card">
      <div className="card-box-d">
        <div className="card-img-d">
          <img
            src={team_url + memberImage}
            alt=""
            className="img-d img-fluid"
          />
        </div>
        <div className="card-overlay card-overlay-hover">
          <div className="card-header-d">
            <div className="card-title-d align-self-center">
              <h3 className="text-white text-decoration-underline title-d">
                {name}
              </h3>
            </div>
          </div>
          <div className="card-body-d">
            <p className="content-d color-text-a">{shortIntro}</p>
            <div className="info-agents color-a">
              <p>
                <strong>Phone: </strong> {phone}
              </p>
              <p>
                <strong>Email: </strong> {email}
              </p>
            </div>
          </div>
          <div className="card-footer-d">
            <div className="socials-footer d-flex justify-content-center">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href={facebook} className="link-one">
                    <CgFacebook color="#fff" fontSize={30} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={instagram} className="link-one">
                    <BsTwitter color="#fff" fontSize={30} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={twitter} className="link-one">
                    <BsInstagram color="#fff" fontSize={30} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={linkdin} className="link-one">
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
};

export default AgentCard;
