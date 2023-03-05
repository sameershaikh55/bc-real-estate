import React, { useEffect, useState } from "react";
import Layout from "../layout";
import ContactTable from "../components/ContactTable";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { getContacts } from "../redux/action/contact";

const Contact = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const { contacts, loading } = useSelector((state) => state.contact);

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  if (loading) {
    return <Loader />;
  }

  const filteredContacts = contacts.filter((contact) => {
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

    const highlightSearchTerm = (text) => {
      const searchTerm = searchQuery.trim();
      if (searchTerm.length === 0) {
        return text;
      }
      const highlightedText = text
        .toString()
        .replace(
          new RegExp(searchTerm, "gi"),
          (match) => `<span class="highlighted-text">${match}</span>`
        );
      return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
    };

    const highlightedContact = {
      ...contact,
      name: highlightSearchTerm(contact.name),
      email: highlightSearchTerm(contact.email),
      phone: highlightSearchTerm(contact.phone),
      subject: highlightSearchTerm(contact.subject),
      requestType: highlightSearchTerm(contact.requestType),
      message: highlightSearchTerm(contact.message),
      dayOfWeek: highlightSearchTerm(dayOfWeek),
      monthName: highlightSearchTerm(monthName),
      year: highlightSearchTerm(year),
      month: highlightSearchTerm(month),
      day: highlightSearchTerm(day),
      time: highlightSearchTerm(time),
      monthDay: highlightSearchTerm(monthDay),
      monthYear: highlightSearchTerm(monthYear),
      yearMonth: highlightSearchTerm(yearMonth),
      yearMonthDay: highlightSearchTerm(yearMonthDay),
    };

    return (
      highlightedContact.name.toLowerCase().includes(searchTermLowerCase) ||
      highlightedContact.email.toLowerCase().includes(searchTermLowerCase) ||
      highlightedContact.phone
        .toString()
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      highlightedContact.subject.toLowerCase().includes(searchTermLowerCase) ||
      highlightedContact.requestType
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      highlightedContact.message.toLowerCase().includes(searchTermLowerCase) ||
      highlightedContact.dayOfWeek
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      highlightedContact.monthName
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      highlightedContact.year.toLowerCase().includes(searchTermLowerCase) ||
      highlightedContact.month.toLowerCase().includes(searchTermLowerCase) ||
      highlightedContact.day.toLowerCase().includes(searchTermLowerCase) ||
      highlightedContact.time.toLowerCase().includes(searchTermLowerCase) ||
      highlightedContact.monthDay.toLowerCase().includes(searchTermLowerCase) ||
      highlightedContact.monthYear
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      highlightedContact.yearMonth
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      highlightedContact.yearMonthDay
        .toLowerCase()
        .includes(searchTermLowerCase)
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
            <h3 className="fw600 f24 mb-1">Contact Request</h3>
            <button className="ms-4 bg-purple-light border-0 px-3 py-1 rounded-3 color1 fw600">
              {contacts.length} requests
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
              <ContactTable filteredContacts={filteredContacts} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
