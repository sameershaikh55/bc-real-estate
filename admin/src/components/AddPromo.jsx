import React, { useEffect, useState } from "react";
import { registerPromo, clearErrors, updatePromo } from "../redux/action/promo";
import { useDispatch, useSelector } from "react-redux";
import SmallLoader from "./SmallLoader";
import { useAlert } from "react-alert";
import { REGISTER_PROMO_RESET } from "../redux/type/promo";

const AddPromo = ({ editData, setEditData }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const [loginHandle, setLoginHandle] = useState({
    promoCode: "",
  });

  const { promoLoading, promoError, success } = useSelector(
    (state) => state.promos
  );

  const handleChange = (e) => {
    setLoginHandle({ ...loginHandle, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    if (editData) {
      dispatch(updatePromo(loginHandle, editData._id));
    } else {
      dispatch(registerPromo(loginHandle));
    }
  };

  useEffect(() => {
    if (promoError) {
      alert.error(promoError);
      dispatch(clearErrors());
    }

    if (editData) {
      setLoginHandle({
        promoCode: editData.promoCode,
      });
    }

    if (success) {
      if (editData) {
        alert.success("Promo edited!");
      } else {
        alert.success("Promo created!");
      }

      setEditData("");
      setLoginHandle({
        promoCode: "",
      });
      dispatch({ type: REGISTER_PROMO_RESET });
    }
  }, [dispatch, alert, success, promoError, editData]);

  return (
    <div className="product_setup pb-3 bg-white rounded-3">
      <h6 className="px-4 pt-3 color2 fw500">
        {(editData && "Edit") || "Add"} a Promo
      </h6>
      <hr />
      <form onSubmit={submit} className="px-4">
        <label htmlFor="Name">Promo Code</label>
        <br />
        <input
          type="text"
          className="w-100 px-3 mt-1 f14"
          name="promoCode"
          placeholder="Enter Promo code"
          value={loginHandle.promoCode}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <hr />
        <div>
          <button
            disabled={(promoLoading && true) || false}
            className="border-0 text-white w-100"
          >
            {(promoLoading && <SmallLoader />) || "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPromo;
