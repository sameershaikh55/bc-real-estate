import React, { useEffect } from "react";
import AddProperty from "../components/AddProperty";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProperty } from "../redux/action/property";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Layout from "../layout";

const AddPropertyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, property } = useSelector((state) => state.property);

  useEffect(() => {
    if (id) {
      dispatch(getSingleProperty(id));
    }
  }, [id]);

  if (loading && id && !property) {
    return <Loader />;
  }

  return (
    <Layout>
      <div className="container-fluid px-4 py-3">
        <div className="d-flex justify-content-between align-items-center bg-white rounded-3 px-4 py-4">
          <h3 className="fw600 f24 mb-0">{(id && "Edit") || "Add"} Property</h3>
          <div>
            <button
              onClick={() => navigate(-1)}
              className="bg-purple-dark text-white border-0 px-3 py-1 rounded-3 color1 fw600"
            >
              go back
            </button>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="user_container_upper payment_container_upper mt-4">
          <div className="row gy-4">
            <div className="col-12">
              <AddProperty />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddPropertyPage;
