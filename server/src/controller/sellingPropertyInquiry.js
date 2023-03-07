const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const SellingPropertyInquiryModel = require("../models/sellingPropertyInquiry");
const sendResponse = require("../utils/sendResponse");

// ADD
exports.createRequest = catchAsyncErrors(async (req, res, next) => {
  const userRequest = await SellingPropertyInquiryModel.create(req.body);
  sendResponse(true, 200, "data", userRequest, res);
});

// DELETE
exports.deleteRequest = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const deleted = await SellingPropertyInquiryModel.findByIdAndDelete(id);
  sendResponse(true, 200, "data", deleted, res);
});

// Get all
exports.allRequest = catchAsyncErrors(async (req, res, next) => {
  const all = await SellingPropertyInquiryModel.find().sort({ createdAt: -1 });
  sendResponse(true, 200, "data", all, res);
});
