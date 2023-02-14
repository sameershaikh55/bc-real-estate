const bcrypt = require("bcryptjs");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const RegistrationModel = require("../models/registration");
const sendToken = require("../utils/jwtToken");
const sendResponse = require("../utils/sendResponse");

// register USER
exports.register = catchAsyncErrors(async (req, res, next) => {
  const userData = await RegistrationModel.create(req.body);
  userData.password = undefined;
  sendToken(userData, 201, res);
});

// login USER
exports.login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) return next(new ErrorHandler("Invalid field", 422));

  const gettingRecord = await RegistrationModel.findOne({ email }).select(
    "+password"
  );

  if (!gettingRecord) return next(new ErrorHandler("user not found", 404));

  const validPassword = await bcrypt.compare(password, gettingRecord.password);

  if (!validPassword)
    return next(new ErrorHandler("Invalid email and password", 400));

  gettingRecord.password = undefined;
  sendToken(gettingRecord, 200, res);
});

// logout USER
exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  sendResponse(true, 200, "message", "logged out successfully", res);
});

// DELETE USER
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const deletedUser = await RegistrationModel.findByIdAndDelete(id);
  sendResponse(true, 200, "user", deletedUser, res);
});

// Update USER
exports.updateUser = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const updated = await RegistrationModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  sendResponse(true, 200, "user", updated, res);
});

// Get all USERs
exports.allUsers = catchAsyncErrors(async (req, res, next) => {
  const users = await RegistrationModel.find();
  sendResponse(true, 200, "users", users, res);
});
