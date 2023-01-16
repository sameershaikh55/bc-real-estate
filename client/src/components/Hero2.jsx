import React from "react";
import HeroSlider, { Overlay, Slide } from "hero-slider";
import { BsHouseFill } from "react-icons/bs";

// IMAGES
import bg_0 from "../assets/images/bg_0.jpg";
import bg_1 from "../assets/images/bg_1.jpg.webp";
import bg_2 from "../assets/images/bg_2.jpg";
import bg_3 from "../assets/images/bg_3.jpg.webp";
import bg_4 from "../assets/images/bg_4.jpg";

function Title(props) {
  return <h1 className="title_container">{props.children}</h1>;
}

function Wrapper(props) {
  return <div className="wrapper_container">{props.children}</div>;
}

const Hero2 = ({ title }) => {
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
    <div className="hero_container hero2">
      <HeroSlider height={"300px"} autoplay>
        <Overlay>
          <Wrapper>
            <h6 className="text-white mb-3 d-flex align-items-center gap-2">
              <BsHouseFill className="mb-1" />
              Real Estate Agency
            </h6>
            <Title>{title}</Title>
            <br />
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
      </HeroSlider>
    </div>
  );
};

export default Hero2;
