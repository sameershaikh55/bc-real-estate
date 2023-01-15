import React from "react";

const Button = ({ children, ...rest }) => {
  return (
    <div className="button6th_container">
      <button className="btn6th" {...rest}>
        <span>{children}</span>
      </button>
    </div>
  );
};

export default Button;
