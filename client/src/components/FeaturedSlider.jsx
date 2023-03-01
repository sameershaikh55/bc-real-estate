import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import property from "../assets/video/property.mp4";

// const movies = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1477120206578-46b3ca98a4e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1559508551-44bff1de756b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1560440021-33f9b867899d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=659&q=80",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1604014237256-11d475e2a2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1600585153782-37009a1dbbe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1600566752986-f70541b632de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
// ];

// const genArray = (c) => Array.from(Array(c).keys());
// const initial = genArray(movies.length);

const FeaturedSlider = () => {
  // const [slides, setSlides] = useState(initial);

  // const rotate = () => {
  //   setSlides((prev) => [...prev.slice(1), prev[0]]);
  // };

  return (
    <div className="featured_slider_container d-none d-xl-block">
      <div className="app">
        <div className="app__background"></div>
        <div className="app__inner">
          <div className="slider">
            <div className="page_container">
              <div className="row align-items-center">
                <div className="col-7">
                  <video
                    className="w-100"
                    src={property}
                    loop
                    muted
                    autoplay
                  ></video>
                </div>
                <div className="col-5 text-white">
                  <h1 className="fw800">New Home</h1>
                  <p>
                    deserunt dignissimos ratione iusto sunt cum! Odit quasi
                    facilis facere amet sapiente sed ipsa perferendis temporibus
                    sit error numquam explicabo, nobis, corporis dolorem ut at
                    maxime eligendi delectus! Magni quas ex voluptate possimus
                    ab, dicta expedita sed ea laborum eos aspernatur
                  </p>
                  <div className="mt-4">
                    <Link
                      className="text-decoration-none"
                      to="/properties?sell"
                    >
                      <Button>
                        <span className="opacity-0">....</span>
                        Sell my property
                        <span className="opacity-0">....</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <ul className="slider__list">
              {slides.map((idx, i) => (
                <li
                  key={i}
                  className="slider__item pointer"
                  style={{
                    transform: `translateX(${
                      i === 0 ? 45.5 : 45.5 + 17.3 * i
                    }rem)`,
                  }}
                >
                  <img src={movies[idx].image} className="slider__item-img" />
                </li>
              ))}
            </ul> */}
            {/* <div className="text">
              <div className="text__inner">
                <div className="text__slider-btn" onClick={rotate}>
                  &#8594;
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSlider;
