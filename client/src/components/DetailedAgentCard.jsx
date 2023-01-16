import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Card = (agent) => {
  const { image, name, bio, phone, email, social } = agent;
  const [hover, setHover] = useState(false);

  return (
    <div className="detailed_agent_card_container">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="card-container"
      >
        <div className="card-image-container">
          <img
            src={image}
            alt={name}
            className={`card-image ${hover ? "card-image-hover" : ""}`}
          />
        </div>
        <div className="card-info-container">
          <h3 className="card-name fw700">{name}</h3>
          <p className="card-bio">
            {bio}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
            incidunt sequi optio praesentium repellendus eos harum eius placeat
            corrupti inventore iure eveniet sed ullam maiores delectus animi
            aperiam sit nihil enim nemo rerum laudantium dolorum est! Minus
            iusto praesentium dicta repudiandae. Fuga eaque et, nam doloremque
            necessitatibus, iste illo architecto minima rerum aperiam natus enim
            obcaecati mollitia modi facilis facere, dignissimos velit pariatur
            aspernatur. Consequuntur ducimus consectetur eum possimus labore
            atque unde accusamus natus. Fuga magnam et sed aperiam facere Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Odit, molestias.
          </p>
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
              <a href={social.facebook}>
                <FaFacebook size={20} className="card-social-icon" />
              </a>
              <a href={social.twitter}>
                <FaTwitter size={20} className="card-social-icon" />
              </a>
              <a href={social.instagram}>
                <FaInstagram size={20} className="card-social-icon" />
              </a>
              <a href={social.linkdin}>
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
