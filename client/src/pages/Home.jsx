import React from "react";

// COMPONENTS
import Layout from "../layout";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Agents from "../components/Agents";
import FeaturedSlider from "../components/FeaturedSlider";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Featured />
      <FeaturedSlider />
      <Agents />
      <Contact />
    </Layout>
  );
};

export default Home;
