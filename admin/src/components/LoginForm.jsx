import React from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { login, clearErrors } from "../redux/action/auth";
import SmallLoader from "./SmallLoader";

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [loginHandle, setLoginHandle] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginHandle({ ...loginHandle, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(login(loginHandle.email, loginHandle.password));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      alert.success("Login successfully");
    }
  }, [dispatch, alert, error, isAuthenticated]);

  return (
    <div className="login_form pb-3">
      <div className="container-fluid">
        <div className="px-4">
          <h4 className="f24 pt-4 fw600">Sign in</h4>
          <p className="color2">Login to BC REAL ESTATE</p>
        </div>
        <hr />

        <form onSubmit={submit}>
          <div className="px-4">
            <label htmlFor="Email">Email</label>
            <br />
            <input
              type="text"
              className="w-100 px-3 mt-1 f14"
              name="email"
              placeholder="Email Address"
              value={loginHandle.email}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
            <label htmlFor="Password">Password</label>
            <br />
            <div className="position-relative">
              <input
                type={(showPass && "text") || "password"}
                className="w-100 px-3 mt-1 f14"
                placeholder="Password"
                name="password"
                value={loginHandle.password}
                onChange={(e) => handleChange(e)}
              />

              <MdRemoveRedEye
                onClick={() => setShowPass(!showPass)}
                className="eye pointer"
                fontSize="1.1rem"
              />
            </div>
          </div>
          <hr />

          <div className="px-4">
            <button
              disabled={loading ? true : false}
              className="w-100 border-0 text-white f14"
            >
              {loading ? <SmallLoader /> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
