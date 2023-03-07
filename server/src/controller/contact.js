const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ContactModel = require("../models/contact");
const sendResponse = require("../utils/sendResponse");

// ADD
exports.createRequest = catchAsyncErrors(async (req, res, next) => {
  const userRequest = await ContactModel.create(req.body);
  sendResponse(true, 200, "data", userRequest, res);
});

// DELETE
exports.deleteRequest = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const deleted = await ContactModel.findByIdAndDelete(id);
  sendResponse(true, 200, "data", deleted, res);
});

// Get all
exports.allRequest = catchAsyncErrors(async (req, res, next) => {
  const all = await ContactModel.find().sort({ createdAt: -1 });
  sendResponse(true, 200, "data", all, res);
});
