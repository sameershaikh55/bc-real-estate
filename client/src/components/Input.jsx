import React from "react";

const Input = ({ label, icon, type, value, name, onChange }) => {
  return (
    <label className="custom-field">
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
