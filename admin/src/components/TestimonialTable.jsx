import React, { useEffect } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { HiPencil } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, deleteTestimonial } from "../redux/action/testimonial";
import { DELETE_TESTIMONIAL_RESET } from "../redux/type/testimonial";
import AddTestimonial from "./AddTestimonial";

const TestimonialTable = ({ editData, setEditData, setAddMember }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { testimonial, error, testimonialDeleted } = useSelector(
    (state) => state.testimonial
  );
  const { testimonial_url } = useSelector((state) => state.pictureUrl);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (testimonialDeleted) {
      alert.success("Testimonial deleted!");
      dispatch({ type: DELETE_TESTIMONIAL_RESET });
    }
  }, [dispatch, alert, testimonialDeleted, error]);

  return (
    <>
      {editData && (
        <AddTestimonial
          editData={editData}
          setEditData={setEditData}
          setAddMember={setAddMember}
        />
      )}

      <div className="bg-white rounded-3">
        <div className="user_table">
          <table className="table">
            <thead>
              <tr>
                <th className="color2 ps-4 fw500">Picture</th>
                <th className="color2 fw500 px-3">Name</th>
                <th className="color2 fw500 px-3">Message</th>
                <th className="color2 fw500">Created At</th>
                <th className="color2 text-end pe-4 fw500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {(testimonial.length &&
                testimonial.map((content, index) => {
                  const { _id, name, message, createdAt, personImage } =
                    content;

                  return (
                    <tr key={index}>
                      <td className="color3 ps-4 fw400">
                        <img
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                          }}
                          className="rounded-3"
                          src={testimonial_url + personImage}
                          alt={name}
                        />
                      </td>
                      <td className="color3 fw400 px-3">{name}</td>
                      <td className="color3 fw400 px-3">{message}</td>
                      <td className="color3 fw400">
                        {new Date(createdAt).toDateString()}
                      </td>
                      <td className="color3 text-end pe-4 fw400">
                        <HiPencil
                          fontSize="1.2rem"
                          color="#8961de"
                          className="pointer"
                          onClick={() => setEditData({ ...content })}
                        />
                        <RiDeleteBinFill
                          onClick={() => dispatch(deleteTestimonial(_id))}
                          className="ms-2 pointer"
                          fontSize="1.2rem"
                          color="#8961de"
                        />
                      </td>
                    </tr>
                  );
                })) || (
                <tr>
                  <td className="text-center" colSpan={6}>
                    no data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TestimonialTable;
