import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const Card = (agent) => {
  const {
    memberImage,
    name,
    phone,
    email,
    longIntro,
    facebook,
    instagram,
    twitter,
    linkdin,
  } = agent;
  const [hover, setHover] = useState(false);
  const { team_url } = useSelector((state) => state.pictureUrl);

  return (
    <div className="detailed_agent_card_container">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="card-container"
      >
        <div className="card-image-container">
          <img
            src={team_url + memberImage}
            alt={name}
            className={`card-image ${hover ? "card-image-hover" : ""}`}
          />
        </div>
        <div className="card-info-container">
          <h3 className="card-name fw700">{name}</h3>
          <p className="card-bio">{longIntro}</p>
          <div className="card-details-container">
            <div className="card-detail">
              <FaPhone size={20} className="card-detail-icon" />
              <p className="card-detail-text">{phone}</p>
            </div>
            <div className="card-detail">
              <FaEnvelope size={20} className="card-detail-icon" />
              <p className="card-detail-text">{email}</p>
            </div>
            <div className="card-social-container">
              <a href={facebook}>
                <FaFacebook size={20} className="card-social-icon" />
              </a>
              <a href={twitter}>
                <FaTwitter size={20} className="card-social-icon" />
              </a>
              <a href={instagram}>
                <FaInstagram size={20} className="card-social-icon" />
              </a>
              <a href={linkdin}>
                <FaLinkedin size={20} className="card-social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
