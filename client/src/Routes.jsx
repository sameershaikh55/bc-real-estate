import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
