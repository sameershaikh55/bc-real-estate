const express = require("express");
const router = express.Router();

const { pictureUrl } = require("../controller/pictureUrl");

// ROUTES
router.route("/").get(pictureUrl);

module.exports = router;
