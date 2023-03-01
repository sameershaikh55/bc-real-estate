const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const TeamModel = require("../models/team");
const sendResponse = require("../utils/sendResponse");
const path = require("path");
const fs = require("fs");

// ADD
exports.createMember = catchAsyncErrors(async (req, res, next) => {
  const team = await TeamModel.create(req.body);
  sendResponse(true, 200, "data", team, res);
});

// DELETE
exports.deleteMember = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const deleted = await TeamModel.findByIdAndDelete(id);

  if (deleted) {
    const imgPath = path.resolve(
      __dirname,
      "../../" + "public/images/team",
      deleted.memberImage
    );
    fs.unlinkSync(imgPath);
  }

  sendResponse(true, 200, "data", deleted, res);
});

// UPDATE
exports.updateMember = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const updated = await TeamModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  sendResponse(true, 200, "data", updated, res);
});

// Get all
exports.allMembers = catchAsyncErrors(async (req, res, next) => {
  const all = await TeamModel.find();
  sendResponse(true, 200, "data", all, res);
});
