import React, { useEffect, useRef, useState } from "react";
import upload from "../assets/upload.svg";
import {
  registerShortVideo,
  clearErrors,
  updateShortVideo,
} from "../redux/action/shortClips";
import { useDispatch, useSelector } from "react-redux";
import SmallLoader from "./SmallLoader";
import { useAlert } from "react-alert";
import {
  REGISTER_SHORT_VIDEO_RESET,
  UPDATE_SHORT_VIDEO_RESET,
} from "../redux/type/shortClips";

const AddVideoShort = ({ editData, setEditData }) => {
  const deviceImage = useRef(null);
  const [deviceImagePreview, setDeviceImagePreview] = useState("");

  const alert = useAlert();
  const dispatch = useDispatch();
  const [loginHandle, setLoginHandle] = useState({
    clip: "",
  });

  const { videoLoading, videoError, success } = useSelector(
    (state) => state.shortVideos
  );

  const handleChange = (e) => {
    const file = e.target.files[0];

    setLoginHandle({
      clip: "",
    });
    setLoginHandle({
      clip: file,
    });

    const reader = new FileReader();

    reader.onloadend = () => {
      setDeviceImagePreview("");
      setDeviceImagePreview(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setDeviceImagePreview("");
    }
  };

  const submit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("clip", loginHandle.clip);

    if (editData) {
      dispatch(updateShortVideo(formData, editData._id));
    } else {
      dispatch(registerShortVideo(formData));
    }
  };

  useEffect(() => {
    if (videoError) {
      alert.error(videoError);
      dispatch(clearErrors());
    }

    if (editData) {
      setLoginHandle({
        clip: editData.clip,
      });
    }

    if (success) {
      if (editData) {
        alert.success("Video edited!");
      } else {
        alert.success("Video created!");
      }

      setEditData("");
      setLoginHandle({
        clip: "",
      });
      setDeviceImagePreview("");
      dispatch({ type: REGISTER_SHORT_VIDEO_RESET });
      dispatch({ type: UPDATE_SHORT_VIDEO_RESET });

      // window.location.reload();
    }
  }, [dispatch, alert, success, videoError, editData]);

  return (
    <div className="product_setup pb-3 bg-white rounded-3">
      <h6 className="px-4 pt-3 color2 fw500">
        {(editData && "Edit") || "Add"} a Video
      </h6>
      <hr />
      <form onSubmit={submit} className="px-4">
        <label htmlFor="clip">Video</label>
        <br />
        <div className="upload-btn-wrapper mt-1 pointer">
          <img src={upload} alt="" className="pointer" />
          <input
            ref={deviceImage}
            type="file"
            accept="video/*"
            name="clip"
            className="pointer"
            id="clip"
            onChange={(e) => handleChange(e)}
          />
        </div>
        {deviceImagePreview && (
          <div className="upload-btn-wrapper mt-1">
            <br />
            <video
              style={{
                height: "200px",
                width: "100%",
                objectFit: "contain",
                borderRadius: "5px",
              }}
              controls
              src={deviceImagePreview}
            ></video>
          </div>
        )}
        <hr />
        <div>
          <button
            disabled={(videoLoading && true) || false}
            className="border-0 text-white w-100"
          >
            {(videoLoading && <SmallLoader />) || "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVideoShort;
