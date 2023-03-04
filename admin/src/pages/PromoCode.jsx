import React, { useEffect, useState } from "react";
import Layout from "../layout";
import PromoCodeTable from "../components/PromoCodeTable";
import AddPromo from "../components/AddPromo";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { getPromos } from "../redux/action/promo";

const PromoCode = () => {
  const [editData, setEditData] = useState();

  const dispatch = useDispatch();
  const { promos, loading } = useSelector((state) => state.promos);

  useEffect(() => {
    dispatch(getPromos());
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout>
      <div className="container-fluid px-4 py-3">
        <div className="d-flex align-items-center bg-white rounded-3 px-4 py-4">
          <h3 className="fw600 f24 mb-1">Promo codes</h3>
          <button className="ms-4 bg-purple-light border-0 px-3 py-1 rounded-3 color1 fw600">
            {promos.length} promos
          </button>
        </div>

        {/* BOTTOM SECTION */}
        <div className="user_container_upper payment_container_upper mt-4">
          <div className="row gy-4">
            <div className="col-12 col-lg-3">
              <AddPromo editData={editData} setEditData={setEditData} />
            </div>
            <div className="col-12 col-lg-9">
              <PromoCodeTable setEditData={setEditData} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PromoCode;
