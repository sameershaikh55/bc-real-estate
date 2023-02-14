const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const NewsletterModel = require("../models/newsletter");
const sendResponse = require("../utils/sendResponse");

// ADD
exports.createRequest = catchAsyncErrors(async (req, res, next) => {
  const userRequest = await NewsletterModel.create(req.body);
  sendResponse(true, 200, "data", userRequest, res);
});

// DELETE
exports.deleteRequest = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const deleted = await NewsletterModel.findByIdAndDelete(id);
  sendResponse(true, 200, "data", deleted, res);
});

// Get all
exports.allRequest = catchAsyncErrors(async (req, res, next) => {
  const all = await NewsletterModel.find();
  sendResponse(true, 200, "data", all, res);
});
