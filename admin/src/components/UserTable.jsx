import React, { useEffect } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { HiPencil } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, deleteUser } from "../redux/action/users";
import { DELETE_USER_RESET } from "../redux/type/users";

const UserTable = ({ setEditData }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { users, error, userDeleted } = useSelector((state) => state.users);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (userDeleted) {
      alert.success("User deleted!");
      dispatch({ type: DELETE_USER_RESET });
    }
  }, [dispatch, alert, userDeleted, error]);

  return (
    <div className="bg-white rounded-3">
      <div className="user_table">
        <table className="table">
          <thead>
            <tr>
              <th className="color2 ps-4 fw500">Email</th>
              <th className="color2 fw500">Created At</th>
              <th className="color2 text-end pe-4 fw500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {(users.length &&
              users.map(({ _id, email, createdAt }, index) => {
                return (
                  <tr key={index}>
                    <td className="color3 ps-4 fw400">{email}</td>
                    <td className="color3 fw400">
                      {new Date(createdAt).toDateString()}
                    </td>
                    <td className="color3 text-end pe-4 fw400">
                      <HiPencil
                        fontSize="1.2rem"
                        color="#8961de"
                        className="pointer"
                        onClick={() =>
                          setEditData({
                            _id,
                            email,
                          })
                        }
                      />
                      <RiDeleteBinFill
                        onClick={() => dispatch(deleteUser(_id))}
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
      {/* <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center px-4 pb-3">
        <p className="mb-0 color2">Page 1 of 37</p>
        <div className="user_btn_container">
          <button className="border-0 color2">Previous</button>
          <button className="ms-3 border-0 text-white mt-3 mt-md-0">
            Next
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default UserTable;
