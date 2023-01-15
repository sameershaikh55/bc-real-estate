import React from "react";
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import { BsHouseFill } from "react-icons/bs";
import Button from "./Button";

// IMAGES
import bg_0 from "../assets/images/bg_0.jpg";
import bg_1 from "../assets/images/bg_1.jpg.webp";
import bg_2 from "../assets/images/bg_2.jpg";
import bg_3 from "../assets/images/bg_3.jpg.webp";
import bg_4 from "../assets/images/bg_4.jpg";

function Subtitle(props) {
  return <p className="subtitle_container">{props.children}</p>;
}

function Title(props) {
  return <h1 className="title_container">{props.children}</h1>;
}

function Wrapper(props) {
  return <div className="wrapper_container">{props.children}</div>;
}

const Hero = () => {
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
    <div className="hero_container">
      <HeroSlider
        height={"100vh"}
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
        <Overlay>
          <Wrapper>
            <h6 className="text-white mb-3 d-flex align-items-center gap-2">
              <BsHouseFill className="mb-1" />
              Real Estate Agency
            </h6>
            <Title>
              Find Your <span className="color1">Dream</span> <br /> House By Us
            </Title>
            <Subtitle>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.{" "}
            </Subtitle>
            <br />
            <Button>Make An Enquiry</Button>
          </Wrapper>
        </Overlay>

        {sliderImages.map((content, i) => {
          return (
            <Slide
              key={i}
              shouldRenderMask
              label={content.label}
              background={{
                backgroundImageSrc: content.background,
              }}
            />
          );
        })}

        {/* <MenuNav /> */}
      </HeroSlider>
    </div>
  );
};

export default Hero;
