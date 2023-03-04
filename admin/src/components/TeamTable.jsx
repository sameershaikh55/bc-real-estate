import React, { useEffect } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { HiPencil } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, deleteTeam } from "../redux/action/team";
import { DELETE_TEAM_RESET } from "../redux/type/team";
import AddMember from "./AddMember";

const TeamTable = ({ editData, setEditData, setAddMember }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { team, error, teamDeleted } = useSelector((state) => state.team);
  const { team_url } = useSelector((state) => state.pictureUrl);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (teamDeleted) {
      alert.success("Member deleted!");
      dispatch({ type: DELETE_TEAM_RESET });
    }
  }, [dispatch, alert, teamDeleted, error]);

  return (
    <>
      {editData && (
        <AddMember
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
                <th className="color2 fw500">Name</th>
                <th className="color2 fw500">Email</th>
                <th className="color2 fw500">Phone</th>
                <th className="color2 fw500">Social</th>
                <th className="color2 fw500">Created At</th>
                <th className="color2 text-end pe-4 fw500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {(team.length &&
                team.map((content, index) => {
                  const {
                    _id,
                    name,
                    email,
                    createdAt,
                    memberImage,
                    phone,
                    facebook,
                    twitter,
                    instagram,
                    linkdin,
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
                          src={team_url + memberImage}
                          alt={name}
                        />
                      </td>
                      <td className="color3 fw400">{name}</td>
                      <td className="color3 fw400">{email}</td>
                      <td className="color3 fw400">+{phone}</td>
                      <td className="color3 fw400">
                        {facebook} <br />
                        {twitter} <br />
                        {instagram} <br />
                        {linkdin}
                      </td>
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
                          onClick={() => dispatch(deleteTeam(_id))}
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
    </>
  );
};

export default TeamTable;
