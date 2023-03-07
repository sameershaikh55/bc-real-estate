import React, { useEffect } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { HiPencil } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, deleteProperty } from "../redux/action/property";
import { DELETE_PROPERTY_RESET } from "../redux/type/property";
import { useNavigate } from "react-router-dom";
import check from "../assets/check.svg";

const PropertiesTable = ({ searchObj }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { properties, currentPage, totalPages, error, propertyDeleted } =
    useSelector((state) => state.property);
  const { properties_url } = useSelector((state) => state.pictureUrl);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (propertyDeleted) {
      alert.success("Property deleted!");
      dispatch({ type: DELETE_PROPERTY_RESET });
    }
  }, [dispatch, alert, propertyDeleted, error]);

  return (
    <>
      <div className="bg-white rounded-3">
        <div
          style={{
            maxHeight: "calc(100vh - 270px)",
          }}
          className="user_table"
        >
          <table className="table">
            <thead>
              <tr>
                <th className="color2 ps-4 fw500">Picture</th>
                <th className="color2 fw500">Title</th>
                <th className="color2 fw500">Location</th>
                <th className="color2 fw500">Status</th>
                <th className="color2 fw500">Created At</th>
                <th className="color2 text-end pe-4 fw500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {(properties.length &&
                properties.map((content, index) => {
                  const {
                    _id,
                    title,
                    location,
                    createdAt,
                    propertyImages,
                    status,
                  } = content;

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
                          src={properties_url + propertyImages[0]}
                          alt={title}
                        />
                      </td>
                      <td className="color3 fw400">{title}</td>
                      <td className="color3 fw400">{location}</td>
                      <td className="color3 fw400">
                        <div className="d-flex align-items-center gap-2">
                          {status}
                          {status === "Active" && <img src={check} alt="" />}
                        </div>
                      </td>
                      <td className="color3 fw400">
                        {new Date(createdAt).toDateString()}
                      </td>
                      <td className="color3 text-end pe-4 fw400">
                        <HiPencil
                          fontSize="1.2rem"
                          color="#8961de"
                          className="pointer"
                          onClick={() => navigate(`/property/${_id}`)}
                        />
                        <RiDeleteBinFill
                          onClick={() => dispatch(deleteProperty(_id))}
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
        {totalPages > 1 && (
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center px-4 pb-3 pt-2">
            <p className="mb-0 color2">
              Page {currentPage} of {totalPages}
            </p>
            <div className="user_btn_container">
              <button
                onClick={() =>
                  navigate(
                    `/?${
                      ("search" in searchObj && `search=${searchObj.search}`) ||
                      ""
                    }${("search" in searchObj && "&") || ""}${
                      `page=${currentPage - 1}` || ""
                    }`
                  )
                }
                className="border-0 color2"
                disabled={(currentPage <= 1 && true) || false}
              >
                Previous
              </button>
              <button
                onClick={() =>
                  navigate(
                    `/?${
                      ("search" in searchObj && `search=${searchObj.search}`) ||
                      ""
                    }${("search" in searchObj && "&") || ""}${
                      `page=${currentPage + 1}` || ""
                    }`
                  )
                }
                className="ms-3 border-0 text-white mt-3 mt-md-0"
                disabled={(totalPages <= currentPage && true) || false}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PropertiesTable;
