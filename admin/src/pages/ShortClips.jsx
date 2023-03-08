import React, { useEffect, useState } from "react";
import Layout from "../layout";
import VideoShortsTable from "../components/VideoShortsTable";
import AddVideoShort from "../components/AddVideoShorts";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { getShortVideos } from "../redux/action/shortClips";

const ShortClips = () => {
  const [editData, setEditData] = useState();

  const dispatch = useDispatch();
  const { shortVideos, loading } = useSelector((state) => state.shortVideos);

  useEffect(() => {
    dispatch(getShortVideos());
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout>
      <div className="container-fluid px-4 py-3">
        <div className="d-flex justify-content-between align-items-center bg-white rounded-3 px-4 py-4">
          <div className="d-flex gap-2">
            <h3 className="fw600 f24 mb-1">Video Shorts</h3>
            <button className="ms-4 bg-purple-light border-0 px-3 py-1 rounded-3 color1 fw600">
              {shortVideos.length} videos
            </button>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="user_container_upper payment_container_upper mt-4">
          <div className="row gy-4">
            <div className="col-12 col-lg-3">
              <AddVideoShort editData={editData} setEditData={setEditData} />
            </div>
            <div className="col-12 col-lg-9">
              <VideoShortsTable setEditData={setEditData} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShortClips;
