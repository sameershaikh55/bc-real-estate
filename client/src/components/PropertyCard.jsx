import React from "react";
import img_1 from "../assets/images/property/img_1.jpg";
import { IoLocationSharp } from "react-icons/io5";
import { BiBed, BiShapeSquare } from "react-icons/bi";
import { TbBath } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PropertyCard = ({ propertyImages }) => {
  const { properties_url } = useSelector((state) => state.pictureUrl);

  return (
    <Link to="/property-detail" className="text-decoration-none">
      <div className="property_card">
        <div className="product-img">
          <div className="hover15 column">
            <div>
              <figure>
                <img
                  style={{
                    minHeight: "240px",
                    maxHeight: "240px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  className="w-100"
                  src={properties_url + propertyImages[0]}
                  alt="#"
                />
              </figure>
            </div>
          </div>
          <div className="product-badge">
            <ul className="list-unstyled">
              <li className="sale-badge bg-green">For Sale</li>
            </ul>
          </div>
          <div className="product-img-location-gallery">
            <div className="product-img-location">
              <ul className="list-unstyled">
                <li className="f14">
                  <a className="f14" href="">
                    <IoLocationSharp className="icon" fontSize={18} /> Belmont
                    Gardens, Chicago
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="product-info">
          <div className="product-price">
            <span>$34,900</span>
          </div>
          <h2 className="product-title">
            <a href="">New Apartment Nice View</a>
          </h2>
          <div className="product-description">
            <p>
              Beautiful Huge 1 Family House In Heart Of <br />
              Westbury. Newly Renovated With New Wood
            </p>
          </div>
          <ul className="list-unstyled ltn__list-item-2 ltn__list-item-2-before">
            <li>
              <span>
                3 <BiBed color="#5c727d" />
              </span>
              Bedrooms
            </li>
            <li>
              <span>
                2 <TbBath color="#5c727d" />
              </span>
              Bathrooms
            </li>
            <li>
              <span>
                3450 <BiShapeSquare />
              </span>
              square Ft
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
