const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const TestimonialModel = require("../models/testimonial");
const sendResponse = require("../utils/sendResponse");
const path = require("path");
const fs = require("fs");
const getFiles = require("../utils/getFiles");

// ADD
exports.tocreate = catchAsyncErrors(async (req, res, next) => {
  const team = await TestimonialModel.create(req.body);
  sendResponse(true, 200, "data", team, res);
});

// DELETE
exports.todelete = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const deleted = await TestimonialModel.findByIdAndDelete(id);

  if (deleted) {
    const imgPath = path.resolve(
      __dirname,
      "../../" + "public/images/testimonials",
      deleted.personImage
    );
    fs.unlinkSync(imgPath);
  }

  sendResponse(true, 200, "data", deleted, res);
});

// UPDATE
exports.toupdate = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;

  const updated = await TestimonialModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  const allMembersImages = getFiles(
    path.resolve(__dirname, "../../" + "public/images/testimonials")
  );
  const team = await TestimonialModel.find().select("personImage -_id");
  const filteredMembers = team.map(({ personImage }) => personImage);
  const cleanedMembersArray = [...new Set(filteredMembers.flat(Infinity))];

  for (let i = 0; i < allMembersImages.length; i++) {
    if (!cleanedMembersArray.includes(allMembersImages[i])) {
      fs.unlinkSync(
        path.resolve(
          __dirname,
          "../../" + "public/images/testimonials",
          allMembersImages[i]
        )
      );
    }
  }

  sendResponse(true, 200, "data", updated, res);
});

// Get all
exports.toall = catchAsyncErrors(async (req, res, next) => {
  const all = await TestimonialModel.find().sort({ createdAt: -1 });
  sendResponse(true, 200, "data", all, res);
});
