import React from "react";
import img_1 from "../assets/images/property/img_1.jpg";
import { IoLocationSharp } from "react-icons/io5";
import { BiBed, BiShapeSquare } from "react-icons/bi";
import { TbBath } from "react-icons/tb";

const PropertyCard = () => {
  return (
    <div class="property_card">
      <div class="product-img">
        <div className="hover15 column">
          <div>
            <figure>
              <img className="w-100" src={img_1} alt="#" />
            </figure>
          </div>
        </div>
        <div class="product-badge">
          <ul className="list-unstyled">
            <li class="sale-badge bg-green">For Sale</li>
          </ul>
        </div>
        <div class="product-img-location-gallery">
          <div class="product-img-location">
            <ul className="list-unstyled">
              <li className="f14">
                <a className="f14" href="">
                  <IoLocationSharp class="icon" fontSize={18} /> Belmont
                  Gardens, Chicago
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="product-info">
        <div class="product-price">
          <span>$34,900</span>
        </div>
        <h2 class="product-title">
          <a href="">New Apartment Nice View</a>
        </h2>
        <div class="product-description">
          <p>
            Beautiful Huge 1 Family House In Heart Of <br />
            Westbury. Newly Renovated With New Wood
          </p>
        </div>
        <ul class="list-unstyled ltn__list-item-2 ltn__list-item-2-before">
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
  );
};

export default PropertyCard;
