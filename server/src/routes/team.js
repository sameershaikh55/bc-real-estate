const express = require("express");
const router = express.Router();
const upload = require("../utils/imageUpload/team");

// MIDDLEWARE
const { authentication } = require("../middleware/authentication");

// CONTROLLERS
const {
  allMembers,
  createMember,
  deleteMember,
  updateMember,
} = require("../controller/team");

// ROUTES
router
  .route("/")
  .get(allMembers)
  .post(authentication, upload.single("memberImage"), createMember);
router
  .route("/:id")
  .delete(authentication, deleteMember)
  .put(authentication, upload.single("memberImage"), updateMember);

module.exports = router;
