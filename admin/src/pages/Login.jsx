import React from "react";
import wave from "../assets/wave.svg";

// COMPONENTS
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="login_container d-flex justify-content-center align-items-center">
      {/* LOGIN FORM START */}
      <LoginForm />
      {/* LOGIN FORM END */}

      {/* BOTTOM IMAGE START */}
      <div className="bottom_wave w-100">
        <img className="w-100" src={wave} alt="" />
      </div>
      {/* BOTTOM IMAGE END */}
    </div>
  );
};

export default Login;
