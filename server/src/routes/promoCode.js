const express = require("express");
const router = express.Router();

// MIDDLEWARE
const { authentication } = require("../middleware/authentication");

// CONTROLLERS
const {
  allRequest,
  createRequest,
  deleteRequest,
  updateRequest,
} = require("../controller/promoCode");

// ROUTES
router
  .route("/")
  .get(authentication, allRequest)
  .post(authentication, createRequest);
router
  .route("/:id")
  .delete(authentication, deleteRequest)
  .put(authentication, updateRequest);

module.exports = router;
