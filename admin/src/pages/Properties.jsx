import React, { useEffect, useState } from "react";
import Layout from "../layout";
import PropertiesTable from "../components/PropertiesTable";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { getProperties, getSearchedProperties } from "../redux/action/property";
import { useLocation, useNavigate } from "react-router-dom";

const Properties = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const search = location.search.substring(1).split("&");
  let searchObj = {};
  for (let i = 0; i < search.length; i++) {
    let pair = search[i].split("=");
    searchObj[pair[0]] = pair[1];
  }

  const dispatch = useDispatch();
  const { totalProperties, totalResults, loading } = useSelector(
    (state) => state.property
  );

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    navigate(`/?search=${event.target.value}`);
  };

  useEffect(() => {
    if ("search" in searchObj || "page" in searchObj) {
      dispatch(
        getSearchedProperties(
          "search" in searchObj && searchObj.search,
          "page" in searchObj && searchObj.page
        )
      );
    } else {
      dispatch(
        getProperties(
          "search" in searchObj && searchObj.search,
          "page" in searchObj && searchObj.page
        )
      );
    }

    if ("search" in searchObj && searchObj.search && !searchQuery) {
      setSearchQuery(
        "search" in searchObj && searchObj.search.trim().replaceAll("%20", " ")
      );
    }
  }, [location]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout>
      <div className="container-fluid px-4 py-3">
        <div className="d-flex justify-content-between align-items-center bg-white rounded-3 px-4 py-4">
          <div className="d-flex">
            <h3 className="fw600 f24 mb-1">Properties</h3>
            <button className="ms-4 bg-purple-light border-0 px-3 py-1 rounded-3 color1 fw600">
              {totalProperties} properties
            </button>
          </div>
          <div className="d-flex gap-2">
            {searchQuery && (
              <button className="ms-4 bg-purple-light border-0 px-3 py-1 rounded-3 color1 fw600">
                {totalResults} results
              </button>
            )}
            <div>
              <input
                type="text"
                placeholder="Search"
                className="form-control w-100"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            <button
              // onClick={() => {
              //   setAddMember(true);
              //   setEditData(false);
              // }}
              className="bg-purple-dark text-white border-0 px-3 py-1 rounded-3 color1 fw600"
            >
              Add Property
            </button>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="user_container_upper payment_container_upper mt-4">
          <div className="row gy-4">
            <div className="col-12">
              <PropertiesTable searchObj={searchObj} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Properties;
