const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const NewsletterModel = require("../models/newsletter");
const PromoCodeModel = require("../models/promoCode");
const sendResponse = require("../utils/sendResponse");
const ErrorHandler = require("../utils/errorhandler");

// ADD
exports.createRequest = catchAsyncErrors(async (req, res, next) => {
  // Find the promoCode in the database
  let promoCode;
  if ("promoCode" in req.body && req.body.promoCode) {
    promoCode = await PromoCodeModel.findOne({
      promoCode: req.body.promoCode,
    });
  }

  // Check if the promoCode is invalid
  if (promoCode === null) {
    return next(new ErrorHandler("Invalid Promo code", 422));
  }

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
  const all = await NewsletterModel.find().sort({ createdAt: -1 });
  sendResponse(true, 200, "data", all, res);
});
