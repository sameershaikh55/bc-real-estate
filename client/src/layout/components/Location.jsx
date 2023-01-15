import React from "react";

const Location = () => {
  return (
    <div className="location_container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1270634980096!2d-73.98682318388754!3d40.7592299793268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855e83bc23b%3A0xed896f67f12f76da!2sTimes%20Sq%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1673823843239!5m2!1sen!2s"
        width="100%"
        height="800px"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};

export default Location;
