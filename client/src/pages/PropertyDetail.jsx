import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { BiBed, BiShapeSquare } from "react-icons/bi";
import { TbBath } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";

// COMPONENTS
import Hero2 from "../components/Hero2";
import PropertySlider from "../components/PropertySlider";
import PropertyDetailTable from "../components/PropertyDetailTable";
import Contact from "../components/Contact";

const PropertyDetail = () => {
  const propertyDetail = [
    {
      title: "Property Details",
      body: [
        { key: "Price", value: "$335,000" },
        { key: "Bedrooms", value: "4" },
        { key: "Full Baths", value: "2" },
        { key: "Half Baths", value: "1" },
        { key: "Total Baths", value: "2.10" },
        { key: "Property Style", value: "Traditional" },
        { key: "Lot Size Area", value: "7020" },
        { key: "Acres", value: "0.1612" },
        { key: "Property Type", value: "Residential" },
        { key: "Stories", value: "2" },
        { key: "Features", value: "Fire/Smoke Alarm,High Ceiling" },
        {
          key: "Exterior Features",
          value:
            "Back Yard,Back Yard Fenced,Covered Patio/Deck,Partially Fenced,Patio/Deck",
        },
        { key: "Year Built", value: "2022" },
        { key: "Subdivision", value: "James Franklin" },
        { key: "Roof", value: "Composition" },
        { key: "Heating", value: "Central Gas" },
        { key: "Foundation", value: "Slab" },
        { key: "Lot Description", value: "Subdivision Lot" },
        { key: "Parking Description", value: "Attached Garage" },
        { key: "Garage spaces", value: "2" },
        { key: "Additional Rooms", value: "1 Living Area" },
      ],
    },
    {
      title: "Geographic Data",
      body: [
        {
          key: "Directions",
          value:
            "From Wheatley and South Victory proceed north on Wheatley, Turn left on Ferguson Way. Head West 3 blocks to James Franklin.",
        },
        { key: "County", value: "Harris" },
        { key: "Latitude", value: "29.874592" },
        { key: "Longitude", value: "-95.433738" },
        { key: "Market Area", value: "11" },
      ],
    },
    {
      title: "Address Information",
      body: [
        {
          key: "Address",
          value: "8114 James Franklin Street, Houston, Texas 77088",
        },
        { key: "Postal Code", value: "77088" },
        { key: "City", value: "Houston" },
        { key: "State", value: "Texas" },
        { key: "Country", value: "United States" },
      ],
    },
    {
      title: "Listing Information",
      body: [
        { key: "Listing Office", value: "Circa Real Estate" },
        { key: "Listing Office Phone", value: "713-862-1101" },
        { key: "Listing Agent", value: "Mary Wassef" },
        { key: "Listing Agent Phone", value: "713-398-8719" },
        { key: "Terms", value: "Cash Sale,Conventional,FHA,VA" },
        {
          key: "Virtual Tour URL",
          value: "https://my.matterport.com/show/?m=CSPJQq2qHrT&mls=1",
        },
      ],
    },
    {
      title: "School Information",
      body: [
        { key: "District", value: "1 - Aldine" },
        { key: "Elementary School", value: "ANDERSON ACADEMY" },
        { key: "Middle School", value: "DREW ACADEMY" },
        {
          key: "High School",
          value: "CARVER H S FOR APPLIED TECH/ENGINEERING/ARTS",
        },
      ],
    },
    {
      title: "MLS Information",
      body: [
        { key: "Days on market", value: "79" },
        { key: "MLS Status", value: "Active" },
        { key: "Listing Date", value: "Oct 28, 2022" },
        { key: "Listing Last Modified", value: "Jan 15, 2023" },
        { key: "Tax ID", value: "074-155-002-0014" },
        { key: "Tax Year", value: "2021" },
        { key: "MLS Area", value: "11" },
        { key: "MLS #", value: "90015165" },
      ],
    },
  ];

  return (
    <>
      <Hero2
        title={<span className="text-uppercase">2902 MORRISON STREET</span>}
      />

      <div className="single_property_container">
        <div className="page_container">
          <div className="container-fluid">
            <div className="row gy-4">
              <div className="col-12 d-flex flex-column flex-md-row justify-content-between align-items-center gap-5">
                <a href="#inquiryForm" className="text-decoration-none">
                  <Button>
                    <span className="opacity-0">...</span>
                    Inquire Now
                    <span className="opacity-0">...</span>
                  </Button>
                </a>
                <p className="f18">
                  <Link
                    className="text-dark text-decoration-none"
                    to="/properties"
                  >
                    Properties
                  </Link>{" "}
                  / <span className="opacity-75">2902 Morrison Street</span>
                </p>
              </div>

              <div className="col-12">
                <PropertySlider />
              </div>

              <div className="col-12">
                <div className="row justify-content-center">
                  <div className="col-lg-11">
                    <div className="info-wrap rounded-3">
                      <div className="row">
                        <div className="col-md-3 d-flex justify-content-md-center align-items-center gap-2 info">
                          <div className="icon">
                            <BiBed className="i" />
                          </div>
                          <h4 className="mb-0">4 Beds</h4>
                        </div>

                        <div className="col-md-3 d-flex justify-content-md-center align-items-center gap-2 info mt-4 mt-lg-0">
                          <div className="icon">
                            <TbBath className="i" />
                          </div>
                          <h4 className="mb-0">2.10 Baths</h4>
                        </div>

                        <div className="col-md-3 d-flex justify-content-md-center align-items-center gap-2 info mt-4 mt-lg-0">
                          <div className="icon">
                            <BiShapeSquare className="i" />
                          </div>
                          <h4 className="mb-0">2,084 SqFt</h4>
                        </div>

                        <div className="col-md-3 d-flex justify-content-md-center align-items-center gap-2 info mt-4 mt-lg-0">
                          <div className="icon">
                            <FaCheckCircle className="i" />
                          </div>
                          <h4 className="mb-0">Active</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-11 mx-auto">
                <h1 className="mt-4">DESCRIPTION</h1>
                <p>
                  Fabulous property on an oversized corner lot in the Woodland
                  Heights, zoned to highly desirable Travis Elementary.
                  <br />
                  <br />
                  This home features 4 bedrooms, 3.5 bathrooms, media/game room,
                  screened in porch, outdoor kitchen, garage apartment, pool +
                  spa and so much more! On the first floor you will find the
                  primary bedroom suite, living areas, dining and the kitchen.
                  On the second floor you will find the secondary
                  bedrooms/bathrooms, an office area, laundry, and the media
                  room. The open concept kitchen features marble counter tops,
                  high-end SS appliances, an abundance of cabinets and counter
                  space, large island with prep sink + separate wet bar, wine
                  storage and more! The family room includes a gas log
                  fireplace, built-in cabinetry, and several French doors that
                  lead out to the screened in porch/side yard. The large primary
                  suite includes double vanities, shower + soaking tub and a
                  large walk-in closet. Don't forget about the garage apartment
                  and all of the outdoor spaces! Great for entertaining!
                </p>
              </div>

              <div className="col-12 col-md-11 mx-auto">
                <br />
                {propertyDetail.map((content, i) => {
                  return <PropertyDetailTable key={i} {...content} />;
                })}
              </div>

              <div className="col-12 col-md-11 mx-auto">
                <h1 className="mt-4">Property location in Google Map</h1>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1270634980096!2d-73.98682318388754!3d40.7592299793268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855e83bc23b%3A0xed896f67f12f76da!2sTimes%20Sq%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1673823843239!5m2!1sen!2s"
                    width="100%"
                    height="500px"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br id="inquiryForm" />
        <br />
        <br />
        <Contact page inquiry />
      </div>
    </>
  );
};

export default PropertyDetail;
