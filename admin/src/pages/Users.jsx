import React, { useEffect, useState } from "react";
import Layout from "../layout";
import UserTable from "../components/UserTable";
import ProductSetup from "../components/AddUser";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { getUsers } from "../redux/action/users";

const Users = () => {
  const [editData, setEditData] = useState();

  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout>
      <div className="container-fluid px-4 py-3">
        <div className="d-flex align-items-center bg-white rounded-3 px-4 py-4">
          <h3 className="fw600 f24 mb-1">Users</h3>
          <button className="ms-4 bg-purple-light border-0 px-3 py-1 rounded-3 color1 fw600">
            {users.length} Users
          </button>
        </div>

        {/* BOTTOM SECTION */}
        <div className="user_container_upper payment_container_upper mt-4">
          <div className="row gy-4">
            <div className="col-12 col-lg-3">
              <ProductSetup editData={editData} setEditData={setEditData} />
            </div>
            <div className="col-12 col-lg-9">
              <UserTable setEditData={setEditData} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
