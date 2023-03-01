const express = require("express");
const router = express.Router();

// MIDDLEWARE
const { authentication } = require("../middleware/authentication");

// CONTROLLERS
const {
  allRequest,
  createRequest,
  deleteRequest,
} = require("../controller/buyingPropertyInquiry");

// ROUTES
router.route("/").get(authentication, allRequest).post(createRequest);
router.route("/:id").delete(authentication, deleteRequest);

module.exports = router;
