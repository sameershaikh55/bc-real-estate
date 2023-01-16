import React from "react";
import Input from "../../components/Input";
import STtitle from "../../components/STtitle";
import { TfiEmail } from "react-icons/tfi";
import { HiOutlineQrCode } from "react-icons/hi2";
import { MdLocationCity } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";

const Newsletter = () => {
  const fields = [
    {
      label: "Email",
      type: "text",
      name: "email",
      icon: <TfiEmail fontSize={18} />,
    },
    {
      label: "Promo code",
      type: "text",
      name: "promoCode",
      icon: <HiOutlineQrCode fontSize={20} />,
    },
    {
      label: "Area Name",
      type: "text",
      name: "areaName",
      icon: <MdLocationCity fontSize={22} />,
    },
    {
      label: "Address (optional)",
      type: "text",
      name: "address",
      icon: <GrMapLocation fontSize={21} />,
    },
  ];

  return (
    <div className="newsletter_container">
      <div className="page_container">
        <div className="container-fluid">
          <div className="inner_container">
            <STtitle>
              <span className="text-white">Newsletter</span>
            </STtitle>

            <form className="row gy-4">
              {fields.map((content, i) => {
                const { label, name, type, icon } = content;

                return (
                  <div key={i} className="col-3">
                    <Input label={label} name={name} type={type} icon={icon} />
                  </div>
                );
              })}

              <div className="col-12">
                <div className="row">
                  <div className="col-6 col-md-5 col-xl-3 mx-auto">
                    <button
                      type="submit"
                      className="btn bg-white text-dark w-100 fw600"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
