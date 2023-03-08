const express = require("express");
const router = express.Router();
const upload = require("../utils/imageUpload/testimonials");

// MIDDLEWARE
const { authentication } = require("../middleware/authentication");

// CONTROLLERS
const {
  toall,
  tocreate,
  todelete,
  toupdate,
} = require("../controller/testimonial");

// ROUTES
router
  .route("/")
  .get(toall)
  .post(authentication, upload.single("personImage"), tocreate);
router
  .route("/:id")
  .delete(authentication, todelete)
  .patch(authentication, upload.single("personImage"), toupdate);

module.exports = router;
