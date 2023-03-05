import React, { useEffect, useRef, useState } from "react";
import upload from "../assets/upload.svg";
import cross from "../assets/cross.svg";
import { useDispatch, useSelector } from "react-redux";
import SmallLoader from "../components/SmallLoader";
import { useAlert } from "react-alert";
import { ADD_TEAM_RESET, UPDATE_TEAM_RESET } from "../redux/type/team";
import { clearErrors, registerTeam, updateTeam } from "../redux/action/team";
import { useParams } from "react-router-dom";

const AddProperty = () => {
  const { id } = useParams();

  const deviceImage = useRef(null);
  const [deviceImagePreview, setDeviceImagePreview] = useState("");

  const alert = useAlert();
  const dispatch = useDispatch();

  const [loginHandle, setLoginHandle] = useState({
    name: "",
    email: "",
    shortIntro: "",
    longIntro: "",
    phone: "",
    memberImage: "",
    facebook: "",
    twitter: "",
    instagram: "",
    linkdin: "",
  });

  const inputFields = [
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email", type: "text" },
    { name: "shortIntro", label: "Short Intro", type: "textarea" },
    { name: "longIntro", label: "Long Intro", type: "textarea" },
    { name: "phone", label: "Phone", type: "text" },
    { name: "memberImage", label: "Picture", type: "text" },
    { name: "facebook", label: "Facebook", type: "text" },
    { name: "twitter", label: "Twitter", type: "text" },
    { name: "instagram", label: "Instagram", type: "text" },
    { name: "linkdin", label: "Linkdin", type: "text" },
  ];

  const { teamLoading, teamError, success } = useSelector(
    (state) => state.team
  );
  const { team_url } = useSelector((state) => state.pictureUrl);

  const handleChange = (e) => {
    if (e.target.name === "memberImage") {
      setLoginHandle({
        ...loginHandle,
        memberImage: e.target.files[0],
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

    const {
      name,
      email,
      phone,
      shortIntro,
      longIntro,
      memberImage,
      facebook,
      instagram,
      linkdin,
      twitter,
    } = loginHandle;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("shortIntro", shortIntro);
    formData.append("longIntro", longIntro);
    formData.append("facebook", facebook);
    formData.append("instagram", instagram);
    formData.append("linkdin", linkdin);
    formData.append("twitter", twitter);

    if (memberImage) {
      formData.append("memberImage", memberImage);
    }

    if (editData) {
      dispatch(updateTeam(formData, editData._id));
    } else {
      dispatch(registerTeam(formData));
    }
  };

  useEffect(() => {
    if (teamError) {
      alert.error(teamError);
      dispatch(clearErrors());
    }

    if (success) {
      if (editData) {
        alert.success("Member edited!");
        dispatch({ type: UPDATE_TEAM_RESET });
      } else {
        alert.success("Member created!");
        dispatch({ type: ADD_TEAM_RESET });
      }

      setEditData("");
      setAddMember(false);
      setLoginHandle({
        name: "",
        email: "",
        shortIntro: "",
        longIntro: "",
        phone: "",
        memberImage: "",
        facebook: "",
        twitter: "",
        instagram: "",
        linkdin: "",
      });
      setDeviceImagePreview("");
    }
  }, [dispatch, alert, success, teamError]);

  useEffect(() => {
    if (editData) {
      const {
        email,
        facebook,
        instagram,
        linkdin,
        longIntro,
        name,
        phone,
        shortIntro,
        twitter,
      } = editData;
      setLoginHandle({
        email,
        facebook,
        instagram,
        linkdin,
        longIntro,
        name,
        phone,
        shortIntro,
        twitter,
      });
      setDeviceImagePreview(team_url + editData.memberImage);
    }
  }, [editData]);

  return (
    <div className="modal_container">
      <div className="product_setup pb-3 bg-white rounded-3">
        <div className="d-flex justify-content-between px-4 pt-3">
          <h6 className="color2 fw500 mb-0">
            {(editData && "Edit") || "Add"} a Member
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
                        name="memberImage"
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
              disabled={(teamLoading && true) || false}
              className="border-0 text-white w-100"
            >
              {(teamLoading && <SmallLoader />) || "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
