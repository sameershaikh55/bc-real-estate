import React from "react";

// COMPONENTS
import Layout from "../layout";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Agents from "../components/Agents";
import FeaturedSlider from "../components/FeaturedSlider";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Featured />
      <Agents />
      <FeaturedSlider />
    </Layout>
  );
};

export default Home;
