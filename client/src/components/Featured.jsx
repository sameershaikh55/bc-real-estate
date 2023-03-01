import React from "react";
import Slider from "react-slick";
import PropertyCard from "./PropertyCard";
import STtitle from "./STtitle";
import Button from "./Button";
import { Link } from "react-router-dom";

const Featured = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="feature_container pb-5">
      <div className="page_container">
        <div className="container-fluid">
          <STtitle>Featured Homes</STtitle>

          <Slider {...settings}>
            {[1, 1, 1, 1, 1, 1].map((content, i) => {
              return (
                <div className="px-3">
                  <PropertyCard />
                </div>
              );
            })}
          </Slider>

          <div style={{ marginTop: "-25px" }}>
            <Link className="text-decoration-none" to="/properties?buy">
              <Button>
                <span className="opacity-0">....</span>
                view more
                <span className="opacity-0">....</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
