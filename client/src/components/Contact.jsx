import React from "react";
import STtitle from "./STtitle";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { BsPhone } from "react-icons/bs";
import Button from "./Button";
import Input from "../components/Input";

const Contact = ({ page, inquiry }) => {
  const fields = [
    {
      label: "Name",
      type: "text",
      name: "name",
    },
    {
      label: "Email",
      type: "text",
      name: "email",
    },
    {
      label: "Phone (optional)",
      type: "text",
      name: "phone",
    },
  ];

  return (
    <div className={`contact_container ${page && !inquiry && "pt-5"}`}>
      {page && <br />}
      <div className="page_container">
        <div className="container-fluid">
          {!page && <STtitle>Contact Us</STtitle>}
          {inquiry && <STtitle>Send Inquiry</STtitle>}

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="info-wrap">
                <div className="row">
                  <div className="col-lg-4 info">
                    <div className="icon">
                      <SlLocationPin className="i" />
                    </div>
                    <h4>Location:</h4>
                    <p>
                      A108 Adam Street
                      <br />
                      New York, NY 535022
                    </p>
                  </div>

                  <div className="col-lg-4 info mt-4 mt-lg-0">
                    <div className="icon">
                      <TfiEmail className="i" />
                    </div>
                    <h4>Email:</h4>
                    <p>
                      info@example.com
                      <br />
                      contact@example.com
                    </p>
                  </div>

                  <div className="col-lg-4 info mt-4 mt-lg-0">
                    <div className="icon">
                      <BsPhone className="i" />
                    </div>
                    <h4>Call:</h4>
                    <p>
                      +1 5589 55488 51
                      <br />
                      +1 5589 22475 14
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5 justify-content-center">
            <div className="col-lg-10">
              <form>
                <div className="row align-items-center gy-3">
                  {fields.map((content, i) => {
                    const { label, name, type } = content;

                    return (
                      <div key={i} className="col-4">
                        <Input label={label} name={name} type={type} />
                      </div>
                    );
                  })}
                  {!inquiry && (
                    <div className="col-6">
                      <Input label="Subject" name="subject" type="text" />
                    </div>
                  )}
                  {!inquiry && (
                    <div className="col-6">
                      <div className="row align-items-center checkbox__wrapper">
                        <label className="col-6 justify-content-center checkbox">
                          Buy a Home
                          <input type="checkbox" className="checkbox__input" />
                          <span className="checkbox__check">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="checkbox__svg"
                            >
                              <path d="M 1 7 L 4 10 L 10 2" fill="none" />
                            </svg>
                          </span>
                        </label>
                        <label className="col-6 justify-content-center checkbox">
                          Sell a Home
                          <input type="checkbox" className="checkbox__input" />
                          <span className="checkbox__check">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="checkbox__svg"
                            >
                              <path d="M 1 7 L 4 10 L 10 2" fill="none" />
                            </svg>
                          </span>
                        </label>
                      </div>
                    </div>
                  )}
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <br />
                <br />
                <Button type="submit">
                  <span className="opacity-0">......</span>
                  Submit
                  <span className="opacity-0">......</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
