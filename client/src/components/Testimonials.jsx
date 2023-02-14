import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <section className="testimonial text-center">
      <div className="container">
        <div className="heading white-heading">Testimonial</div>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={handleSelect}
          id="testimonial4"
          interval={5000}
          pauseOnHover={true}
        >
          <Carousel.Item>
            <div className="testimonial4_slide">
              <img
                src="https://i.ibb.co/8x9xK4H/team.jpg"
                className="img-circle img-responsive"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </p>
              <h4>Harry James</h4>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="testimonial4_slide">
              <img
                src="https://i.ibb.co/8x9xK4H/team.jpg"
                className="img-circle img-responsive"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </p>
              <h4>Philips Marken</h4>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="testimonial4_slide">
              <img
                src="https://i.ibb.co/8x9xK4H/team.jpg"
                className="img-circle img-responsive"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </p>
              <h4>Louis Cena</h4>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
