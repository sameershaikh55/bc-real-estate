import React from "react";

// COMPONENTS
import Hero2 from "../components/Hero2";
import ContactC from "../components/Contact";

const Contact = () => {
  return (
    <>
      <Hero2
        title={
          <>
            <span className="color1">Contact</span> Us
          </>
        }
      />

      <ContactC page />
    </>
  );
};

export default Contact;
