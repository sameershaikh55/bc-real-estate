import React from "react";
import UserTable from "../components/UserTable";
import Layout from "../layout";

const Dashboard = ({ localMode }) => {
  return (
    <Layout>
      <div className="container-fluid px-4 py-3">
        <div className="d-flex align-items-center bg-white rounded-3 px-4 py-4">
          <h3 className="fw600 f24 mb-1">Properties</h3>
          <button className="ms-4 bg-purple-light border-0 px-3 py-1 rounded-3 color1 fw600">
            786 Properties
          </button>
        </div>

        {/* BOTTOM SECTION */}
        <div className="user_container_upper mt-4">
          <div className="row gy-4">
            <div className="col-12 rounded-3">
              <UserTable />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
