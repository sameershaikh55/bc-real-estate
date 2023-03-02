import React, { useEffect, useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { REGISTER_USER_RESET } from "../redux/type/users";
import { registerUser, clearErrors, updateUser } from "../redux/action/users";
import { useDispatch, useSelector } from "react-redux";
import SmallLoader from "./SmallLoader";
import { useAlert } from "react-alert";

const ProductSetup = ({ editData, setEditData }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);
  const [loginHandle, setLoginHandle] = useState({
    email: "",
    password: "",
  });

  const { userLoading, userError, success } = useSelector(
    (state) => state.users
  );

  const handleChange = (e) => {
    setLoginHandle({ ...loginHandle, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    if (loginHandle.email && loginHandle.password) {
      if (editData) {
        dispatch(updateUser(loginHandle, editData._id));
      } else {
        dispatch(registerUser(loginHandle));
      }
    } else {
      alert.error("All Fields are required");
    }
  };

  useEffect(() => {
    if (userError) {
      alert.error(userError);
      dispatch(clearErrors());
    }

    if (editData) {
      setLoginHandle({
        email: editData.email,
        password: "",
      });
    }

    if (success) {
      if (editData) {
        alert.success("User edited!");
      } else {
        alert.success("User created!");
      }

      setEditData("");
      setLoginHandle({
        email: "",
        password: "",
      });
      dispatch({ type: REGISTER_USER_RESET });
    }
  }, [dispatch, alert, success, userError, editData]);

  return (
    <div className="product_setup pb-3 bg-white rounded-3">
      <h6 className="px-4 pt-3 color2 fw500">
        {(editData && "Edit") || "Add"} a User
      </h6>
      <hr />
      <form onSubmit={submit} className="px-4">
        <label htmlFor="Name">Email</label>
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
        <br />
        <hr />
        <div>
          <button
            disabled={(userLoading && true) || false}
            className="border-0 text-white w-100"
          >
            {(userLoading && <SmallLoader />) || "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductSetup;
