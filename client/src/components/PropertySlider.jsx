import React from "react";
import HeroSlider, { Slide } from "hero-slider";

// IMAGES
import bg_0 from "../assets/images/bg_0.jpg";
import bg_1 from "../assets/images/bg_1.jpg.webp";
import bg_2 from "../assets/images/bg_2.jpg";
import bg_3 from "../assets/images/bg_3.jpg.webp";
import bg_4 from "../assets/images/bg_4.jpg";

const PropertySlider = () => {
  const sliderImages = [
    {
      label: "Background zero",
      background: bg_0,
    },
    {
      label: "Background one",
      background: bg_1,
    },
    {
      label: "Background two",
      background: bg_2,
    },
    {
      label: "Background three",
      background: bg_3,
    },
    {
      label: "Background four",
      background: bg_4,
    },
  ];

  return (
    <div className="property_slider_container">
      <HeroSlider
        height={(window.innerWidth < 575 && "250px") || "700px"}
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,
          onSliding: (nextSlide) =>
            console.debug("onSliding(nextSlide): ", nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) =>
            console.debug("onAfterSliding(nextSlide): ", nextSlide),
        }}
      >
        {sliderImages.map((content, i) => {
          return (
            <Slide
              key={i}
              label={content.label}
              background={{
                backgroundImageSrc: content.background,
              }}
            />
          );
        })}
      </HeroSlider>
    </div>
  );
};

export default PropertySlider;
