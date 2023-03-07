const express = require("express");
const router = express.Router();
const upload = require("../utils/imageUpload/property");

// MIDDLEWARE
const { authentication } = require("../middleware/authentication");

// CONTROLLERS
const {
  allProperties,
  createProperty,
  deleteProperty,
  updateProperty,
  getPropertyDetails,
} = require("../controller/property");

// ROUTES
router
  .route("/")
  .get(allProperties)
  .post(authentication, upload.array("propertyImages", 25), createProperty);
router
  .route("/:id")
  .get(getPropertyDetails)
  .delete(authentication, deleteProperty)
  .put(authentication, upload.array("propertyImages", 25), updateProperty);

module.exports = router;
