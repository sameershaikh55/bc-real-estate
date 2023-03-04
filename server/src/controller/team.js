const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const TeamModel = require("../models/team");
const sendResponse = require("../utils/sendResponse");
const path = require("path");
const fs = require("fs");
const getFiles = require("../utils/getFiles");

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
  
  console.log(req.body);

  const updated = await TeamModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  const allMembersImages = getFiles(
    path.resolve(__dirname, "../../" + "public/images/team")
  );
  const team = await TeamModel.find().select("memberImage -_id");
  const filteredMembers = team.map(({ memberImage }) => memberImage);
  const cleanedMembersArray = [...new Set(filteredMembers.flat(Infinity))];

  for (let i = 0; i < allMembersImages.length; i++) {
    if (!cleanedMembersArray.includes(allMembersImages[i])) {
      fs.unlinkSync(
        path.resolve(
          __dirname,
          "../../" + "public/images/team",
          allMembersImages[i]
        )
      );
    }
  }

  sendResponse(true, 200, "data", updated, res);
});

// Get all
exports.allMembers = catchAsyncErrors(async (req, res, next) => {
  const all = await TeamModel.find();
  sendResponse(true, 200, "data", all, res);
});
