// IMPORTING CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";

// IMPORTING ROUTER AND SWITCH
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Public from "./components/Route/PublicRoute";
import Protected from "./components/Route/ProtectedRoute";
import Redirection from "./components/Route/Redirection.jsx";
import Properties from "./pages/Properties";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Team from "./pages/Team";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/action/auth";
import Contact from "./pages/Contact";
import Newsletter from "./pages/Newsletter";
import PromoCode from "./pages/PromoCode";
import BuyingInquiry from "./pages/BuyingInquiry";
import AddProperty from "./pages/AddProperty";
import SellingPropertyInquiry from "./pages/SellingInquiry";
import ShortClips from "./pages/ShortClips";
import Testimonial from "./pages/Testimonial";

function App() {
  const [mode, setMode] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  let localMode = localStorage.getItem("modeLocal");

  useEffect(() => {
    localStorage.setItem("modeLocal", 1);
    setMode(1);

    document.body.style.background = "#f5f6f8";

    // if (!localMode) {
    //   document.body.style.background = "#f5f6f8";
    // } else if (localMode == 1) {
    // } else if (localMode && localMode == 2) {
    //   document.body.style.background = "#212121";
    // }
  }, [localMode, mode]);

  return (
    <div
      className={`${
        (!localMode && "light") || (localMode == 1 && "light") || "dark"
      }`}
    >
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <Public>
                <Login />
              </Public>
            }
          />
          <Route
            path="/"
            element={
              <Protected>
                <Properties localMode={localMode} />
              </Protected>
            }
          />
          <Route path="*" element={<Redirection localMode={localMode} />} />
          <Route
            path="/users"
            element={
              <Protected>
                <Users />
              </Protected>
            }
          />
          <Route
            path="/team"
            element={
              <Protected>
                <Team />
              </Protected>
            }
          />
          <Route
            path="/contact"
            element={
              <Protected>
                <Contact />
              </Protected>
            }
          />
          <Route
            path="/newsletter"
            element={
              <Protected>
                <Newsletter />
              </Protected>
            }
          />
          <Route
            path="/promocode"
            element={
              <Protected>
                <PromoCode />
              </Protected>
            }
          />
          <Route
            path="/buy-inquiry"
            element={
              <Protected>
                <BuyingInquiry />
              </Protected>
            }
          />
          <Route
            path="/sell-inquiry"
            element={
              <Protected>
                <SellingPropertyInquiry />
              </Protected>
            }
          />
          <Route
            path="/video-shorts"
            element={
              <Protected>
                <ShortClips />
              </Protected>
            }
          />
          <Route
            path="/testimonials"
            element={
              <Protected>
                <Testimonial />
              </Protected>
            }
          />
          {["/property", "/property/:id"].map((url, i) => {
            return (
              <Route
                key={i}
                path={url}
                element={
                  <Protected>
                    <AddProperty />
                  </Protected>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
