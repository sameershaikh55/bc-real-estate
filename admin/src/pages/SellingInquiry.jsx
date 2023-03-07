import React, { useEffect, useState } from "react";
import Layout from "../layout";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { getSellingInquiry } from "../redux/action/sellingInquiry";
import SellingInquiryTable from "../components/SellingInquiryTable";

const SellingPropertyInquiry = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const { inquiries, loading } = useSelector((state) => state.sellingInquiry);

  useEffect(() => {
    dispatch(getSellingInquiry());
  }, []);

  if (loading) {
    return <Loader />;
  }

  const filteredData = inquiries.filter((contact) => {
    const createdAt = new Date(contact.createdAt);
    const dayOfWeek = createdAt.toLocaleString("en-US", { weekday: "short" });
    const monthName = createdAt.toLocaleString("en-US", { month: "long" });
    const year = createdAt.getFullYear().toString();
    const month = (createdAt.getMonth() + 1).toString().padStart(2, "0");
    const day = createdAt.getDate().toString().padStart(2, "0");
    const time = createdAt.toLocaleTimeString("en-US", { hour12: false });

    const searchTermLowerCase = searchQuery.toLowerCase();
    const monthNameLowerCase = monthName.toLowerCase();
    const yearLowerCase = year.toLowerCase();
    const monthLowerCase = month.toLowerCase();
    const dayLowerCase = day.toLowerCase();
    const timeLowerCase = time.toLowerCase();

    const monthDay = `${monthNameLowerCase} ${dayLowerCase}`;
    const monthYear = `${monthNameLowerCase} ${yearLowerCase}`;
    const yearMonth = `${yearLowerCase}-${monthLowerCase}`;
    const yearMonthDay = `${yearLowerCase}-${monthLowerCase}-${dayLowerCase}`;

    return (
      contact.name.toLowerCase().includes(searchTermLowerCase) ||
      contact.email.toLowerCase().includes(searchTermLowerCase) ||
      contact.phone.toString().toLowerCase().includes(searchTermLowerCase) ||
      contact.message.toLowerCase().includes(searchTermLowerCase) ||
      dayOfWeek.toLowerCase().includes(searchTermLowerCase) ||
      monthNameLowerCase.includes(searchTermLowerCase) ||
      yearLowerCase.includes(searchTermLowerCase) ||
      monthLowerCase.includes(searchTermLowerCase) ||
      dayLowerCase.includes(searchTermLowerCase) ||
      timeLowerCase.includes(searchTermLowerCase) ||
      monthDay.includes(searchTermLowerCase) ||
      monthYear.includes(searchTermLowerCase) ||
      yearMonth.includes(searchTermLowerCase) ||
      yearMonthDay.includes(searchTermLowerCase) ||
      dayOfWeek.toLowerCase().includes(searchTermLowerCase)
    );
  });

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Layout>
      <div className="container-fluid px-4 py-3">
        <div className="d-flex justify-content-between align-items-center bg-white rounded-3 px-4 py-4">
          <div className="d-flex gap-2">
            <h3 className="fw600 f24 mb-1">Selling Inquiry</h3>
            <button className="ms-4 bg-purple-light border-0 px-3 py-1 rounded-3 color1 fw600">
              {inquiries.length} requests
            </button>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search"
              className="form-control w-100"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="user_container_upper payment_container_upper mt-4">
          <div className="row gy-4">
            <div className="col-12">
              <SellingInquiryTable filteredContacts={filteredData} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SellingPropertyInquiry;
