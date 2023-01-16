import React from "react";

// COMPONENTS
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Agents from "../components/Agents";
import FeaturedSlider from "../components/FeaturedSlider";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <FeaturedSlider />
      <Agents />
      <Contact />
    </>
  );
};

export default Home;
