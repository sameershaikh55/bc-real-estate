import React, { useEffect } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { HiPencil } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { deleteShortVideo, clearErrors } from "../redux/action/shortClips";
import { DELETE_TESTIMONIAL_RESET } from "../redux/type/testimonial";
import { useAlert } from "react-alert";

const VideoShortsTable = ({ setEditData }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { shortVideos, videoDeleted, error } = useSelector(
    (state) => state.shortVideos
  );
  const { video_short_url } = useSelector((state) => state.pictureUrl);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (videoDeleted) {
      alert.success("Video deleted!");
      dispatch({ type: DELETE_TESTIMONIAL_RESET });
      // window.location.reload();
    }
  }, [dispatch, alert, videoDeleted, error]);

  return (
    <div className="video_shorts_container pe-1">
      <div className="row gy-4">
        {(shortVideos.length &&
          shortVideos.map(({ clip, _id }, i) => {
            return (
              <div key={i} className="col-4">
                <div className="rounded-3 p-1 bg-white shadow-sm">
                  <div className="d-flex justify-content-end py-1">
                    <HiPencil
                      fontSize="1.5rem"
                      color="#8961de"
                      className="pointer"
                      onClick={() => setEditData({ clip, _id })}
                    />
                    <RiDeleteBinFill
                      onClick={() => dispatch(deleteShortVideo(_id))}
                      className="ms-2 pointer"
                      fontSize="1.5rem"
                      color="#8961de"
                    />
                  </div>
                  <video
                    style={{
                      height: "200px",
                      width: "100%",
                      objectFit: "contain",
                      borderRadius: "5px",
                    }}
                    controls
                    src={video_short_url + clip}
                  ></video>
                </div>
              </div>
            );
          })) || <div className="text-center">no video found</div>}
      </div>
    </div>
  );
};

export default VideoShortsTable;
