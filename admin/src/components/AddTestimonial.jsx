import React, { useEffect, useRef, useState } from "react";
import upload from "../assets/upload.svg";
import cross from "../assets/cross.svg";
import { useDispatch, useSelector } from "react-redux";
import SmallLoader from "./SmallLoader";
import { useAlert } from "react-alert";
import {
  ADD_TESTIMONIAL_RESET,
  UPDATE_TESTIMONIAL_RESET,
} from "../redux/type/testimonial";
import {
  clearErrors,
  registerTestimonial,
  updateTestimonial,
} from "../redux/action/testimonial";

const Modal = ({ editData, setEditData, setAddMember }) => {
  const deviceImage = useRef(null);
  const [deviceImagePreview, setDeviceImagePreview] = useState("");

  const alert = useAlert();
  const dispatch = useDispatch();

  const [loginHandle, setLoginHandle] = useState({
    name: "",
    message: "",
    personImage: "",
  });

  const inputFields = [
    { name: "name", label: "Name", type: "text" },
    { name: "message", label: "Message", type: "textarea" },
    { name: "personImage", label: "Picture", type: "text" },
  ];

  const { testimonialLoading, testimonialError, success } = useSelector(
    (state) => state.testimonial
  );
  const { testimonial_url } = useSelector((state) => state.pictureUrl);

  const handleChange = (e) => {
    if (e.target.name === "personImage") {
      setLoginHandle({
        ...loginHandle,
        personImage: e.target.files[0],
      });

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setDeviceImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setLoginHandle({ ...loginHandle, [e.target.name]: e.target.value });
    }
  };

  const submit = (e) => {
    e.preventDefault();

    const { name, message, personImage } = loginHandle;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("message", message);

    if (personImage) {
      formData.append("personImage", personImage);
    }

    if (editData) {
      dispatch(updateTestimonial(formData, editData._id));
    } else {
      dispatch(registerTestimonial(formData));
    }
  };

  useEffect(() => {
    if (testimonialError) {
      alert.error(testimonialError);
      dispatch(clearErrors());
    }

    if (success) {
      if (editData) {
        alert.success("Testimonial edited!");
        dispatch({ type: UPDATE_TESTIMONIAL_RESET });
      } else {
        alert.success("Testimonial created!");
        dispatch({ type: ADD_TESTIMONIAL_RESET });
      }

      setEditData("");
      setAddMember(false);
      setLoginHandle({
        name: "",
        message: "",
        personImage: "",
      });
      setDeviceImagePreview("");
    }
  }, [dispatch, alert, success, testimonialError]);

  useEffect(() => {
    if (editData) {
      const { name, message } = editData;
      setLoginHandle({
        name,
        message,
      });
      setDeviceImagePreview(testimonial_url + editData.personImage);
    }
  }, [editData]);

  return (
    <div className="modal_container">
      <div className="product_setup pb-3 bg-white rounded-3">
        <div className="d-flex justify-content-between px-4 pt-3">
          <h6 className="color2 fw500 mb-0">
            {(editData && "Edit") || "Add"} a Testimonial
          </h6>
          <div>
            <img
              onClick={() => {
                setEditData("");
                setAddMember(false);
              }}
              className="pointer"
              style={{ width: "20px", height: "20px" }}
              src={cross}
              alt=""
            />
          </div>
        </div>
        <hr />
        <form onSubmit={submit} className="px-4">
          {inputFields.map((input) => {
            if (input.type === "textarea") {
              return (
                <React.Fragment key={input.name}>
                  <label htmlFor={input.label}>{input.label}</label>
                  <br />
                  <textarea
                    cols="30"
                    rows="5"
                    name={input.name}
                    placeholder={input.label}
                    value={loginHandle[input.name]}
                    onChange={(e) => handleChange(e)}
                  ></textarea>
                  <br />
                  <br />
                </React.Fragment>
              );
            }

            if (input.label === "Picture") {
              return (
                <React.Fragment key={input.name}>
                  <label htmlFor="Name">Profile Picture</label>
                  <br />
                  <div className="d-flex gap-3">
                    <div className="upload-btn-wrapper mt-1 pointer">
                      <img src={upload} alt="" className="pointer" />
                      <input
                        ref={deviceImage}
                        type="file"
                        accept="image/*"
                        name="personImage"
                        className="pointer"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    {deviceImagePreview && (
                      <div className="upload-btn-wrapper mt-1">
                        <img
                          style={{
                            height: "52px",
                            width: "52px",
                            objectFit: "cover",
                            borderRadius: "5px",
                          }}
                          src={deviceImagePreview}
                          alt=""
                        />
                      </div>
                    )}
                  </div>
                  <br />
                </React.Fragment>
              );
            }

            return (
              <React.Fragment key={input.name}>
                <label htmlFor={input.name}>{input.label}</label>
                <br />
                <input
                  type={input.type}
                  className="w-100 px-3 mt-1 f14"
                  name={input.name}
                  placeholder={input.label}
                  value={loginHandle[input.name]}
                  onChange={(e) => handleChange(e)}
                />
                <br />
                <br />
              </React.Fragment>
            );
          })}
          <div className="mt-2">
            <button
              disabled={(testimonialLoading && true) || false}
              className="border-0 text-white w-100"
            >
              {(testimonialLoading && <SmallLoader />) || "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
