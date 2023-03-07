const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const PromoCodeModel = require("../models/promoCode");
const sendResponse = require("../utils/sendResponse");

// ADD
exports.createRequest = catchAsyncErrors(async (req, res, next) => {
  const userRequest = await PromoCodeModel.create(req.body);
  sendResponse(true, 200, "data", userRequest, res);
});

// DELETE
exports.deleteRequest = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const deleted = await PromoCodeModel.findByIdAndDelete(id);
  sendResponse(true, 200, "data", deleted, res);
});

// UPDATE
exports.updateRequest = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const updated = await PromoCodeModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  sendResponse(true, 200, "data", updated, res);
});

// Get all
exports.allRequest = catchAsyncErrors(async (req, res, next) => {
  const all = await PromoCodeModel.find().sort({ createdAt: -1 });
  sendResponse(true, 200, "data", all, res);
});
