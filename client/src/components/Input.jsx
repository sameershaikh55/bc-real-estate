import React from "react";

const Input = ({ label, icon, type, value, name, onChange, className }) => {
  return (
    <label className={`custom-field ${className}`}>
      {icon && <div className="icon">{icon}</div>}
      <input
        type={type}
        placeholder={label}
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
