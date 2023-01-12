import React from "react";

const Button = ({ children }) => {
  return (
    <div className="button6th_container">
      <button className="btn6th">
        <span>{children}</span>
      </button>
    </div>
  );
};

export default Button;
