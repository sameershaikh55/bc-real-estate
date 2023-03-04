import React, { useEffect, useState } from "react";
import Layout from "../layout";
import ContactTable from "../components/ContactTable";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { getContacts } from "../redux/action/contact";

const Contact = () => {
  const dispatch = useDispatch();
  const { contacts, loading } = useSelector((state) => state.contact);

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  if (loading) {
    return <Loader />;
  }
  
  return (
    <Layout>
      <div className="container-fluid px-4 py-3">
        <div className="d-flex align-items-center bg-white rounded-3 px-4 py-4">
          <h3 className="fw600 f24 mb-1">Contact Request</h3>
          <button className="ms-4 bg-purple-light border-0 px-3 py-1 rounded-3 color1 fw600">
            {contacts.length} requests
          </button>
        </div>

        {/* BOTTOM SECTION */}
        <div className="user_container_upper payment_container_upper mt-4">
          <div className="row gy-4">
            <div className="col-12">
              <ContactTable />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
