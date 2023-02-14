const express = require("express");
const router = express.Router();

// MIDDLEWARE
const { authentication } = require("../middleware/authentication");

// CONTROLLERS
const {
  register,
  login,
  logout,
  updateUser,
  deleteUser,
  allUsers,
} = require("../controller/auth");

// ROUTES
router.route("/register").post(authentication, register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/users").get(authentication, allUsers);
router
  .route("/user/:id")
  .put(authentication, updateUser)
  .delete(authentication, deleteUser);

module.exports = router;
