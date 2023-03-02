const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendResponse = require("../utils/sendResponse");

exports.pictureUrl = catchAsyncErrors(async (req, res, next) => {
  const imageUrl = `${req.protocol}://${req.get("host")}/public/images/`;
  sendResponse(true, 200, "data", imageUrl, res);
});
