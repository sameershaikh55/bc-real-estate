import React, { useEffect } from "react";
import { loadUrls } from "./redux/action/pictureUrl";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Layout from "./layout";
import Agents from "./pages/Agents";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import Newsletter from "./pages/Newsletter";
import { useDispatch } from "react-redux";

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUrls());
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/team" element={<Agents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/property-detail" element={<PropertyDetail />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
