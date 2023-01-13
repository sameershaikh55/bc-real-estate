import React from "react";

// COMPONENTS
import Layout from "../layout";
import Hero from "../components/Hero";
import Featured from "../components/Featured";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Featured />
    </Layout>
  );
};

export default Home;
