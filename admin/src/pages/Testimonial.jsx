import React, { useEffect, useState } from "react";
import Layout from "../layout";
import AddTestimonial from "../components/AddTestimonial";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { getTestimonial } from "../redux/action/testimonial";
import TestimonialTable from "../components/TestimonialTable";

const Testimonial = () => {
  const [editData, setEditData] = useState(false);
  const [addMember, setAddMember] = useState(false);
  const dispatch = useDispatch();
  const { testimonial, loading } = useSelector((state) => state.testimonial);

  useEffect(() => {
    dispatch(getTestimonial());
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout>
      <div className="container-fluid px-4 py-3">
        <div className="d-flex justify-content-between align-items-center bg-white rounded-3 px-4 py-4">
          <div className="d-flex">
            <h3 className="fw600 f24 mb-1">Testimonials</h3>
            <button className="ms-4 bg-purple-light border-0 px-3 py-1 rounded-3 color1 fw600">
              {testimonial.length} Members
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setAddMember(true);
                setEditData(false);
              }}
              className="bg-purple-dark text-white border-0 px-3 py-1 rounded-3 color1 fw600"
            >
              Add Testimonial
            </button>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="user_container_upper payment_container_upper mt-4">
          {addMember && (
            <AddTestimonial
              editData={editData}
              setEditData={setEditData}
              setAddMember={setAddMember}
            />
          )}

          <div className="row gy-4">
            <div className="col-12">
              <TestimonialTable
                editData={editData}
                setEditData={setEditData}
                setAddMember={setAddMember}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Testimonial;
