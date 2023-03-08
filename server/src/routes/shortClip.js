const express = require("express");
const router = express.Router();
const upload = require("../utils/videoUpload/shortClips");

// MIDDLEWARE
const { authentication } = require("../middleware/authentication");

// CONTROLLERS
const {
  allClips,
  createClip,
  deleteClip,
  updateClip,
} = require("../controller/shortClip");

// ROUTES
router
  .route("/")
  .get(allClips)
  .post(authentication, upload.single("clip"), createClip);
router
  .route("/:id")
  .delete(authentication, deleteClip)
  .patch(authentication, upload.single("clip"), updateClip);

module.exports = router;
