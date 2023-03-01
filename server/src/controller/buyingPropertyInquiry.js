const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const BuyingPropertyInquiryModel = require("../models/buyingPropertyInquiry");
const sendResponse = require("../utils/sendResponse");

// ADD
exports.createRequest = catchAsyncErrors(async (req, res, next) => {
  const userRequest = await BuyingPropertyInquiryModel.create(req.body);
  sendResponse(true, 200, "data", userRequest, res);
});

// DELETE
exports.deleteRequest = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const deleted = await BuyingPropertyInquiryModel.findByIdAndDelete(id);
  sendResponse(true, 200, "data", deleted, res);
});

// Get all
exports.allRequest = catchAsyncErrors(async (req, res, next) => {
  const all = await BuyingPropertyInquiryModel.find();
  sendResponse(true, 200, "data", all, res);
});
