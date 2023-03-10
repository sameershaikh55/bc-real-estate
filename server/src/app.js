const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

// ERROR HANDLER
const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "src/config/config.env" });
}

// APP USE
app.use(
  "/public/images",
  express.static(path.resolve(__dirname, "../" + "public/images"))
);
app.use(
  "/public/videos",
  express.static(path.resolve(__dirname, "../" + "public/videos"))
);
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// ROUTE IMPORT
const pictureUrl = require("./routes/pictureUrl");
const auth = require("./routes/auth");
const contact = require("./routes/contact");
const newsletter = require("./routes/newsletter");
const promocode = require("./routes/promoCode");
const team = require("./routes/team");
const property = require("./routes/property");
const buyingPropertyInquiry = require("./routes/buyingPropertyInquiry");
const sellingPropertyInquiry = require("./routes/sellingPropertyInquiry");
const shortClip = require("./routes/shortClip");
const testimonial = require("./routes/testimonial");

// TESTING
app.get("/", (req, res) => {
  res.json("working");
});

// CONTROLLERS
app.use("/api/picture-url", pictureUrl);
app.use("/api/auth", auth);
app.use("/api/contact", contact);
app.use("/api/newsletter", newsletter);
app.use("/api/promocode", promocode);
app.use("/api/team", team);
app.use("/api/property", property);
app.use("/api/inquiry/buy", buyingPropertyInquiry);
app.use("/api/inquiry/sell", sellingPropertyInquiry);
app.use("/api/clip", shortClip);
app.use("/api/testimonial", testimonial);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
