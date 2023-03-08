const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ShortClipModel = require("../models/shortClip");
const sendResponse = require("../utils/sendResponse");
const path = require("path");
const fs = require("fs");
const getFiles = require("../utils/getFiles");

// ADD
exports.createClip = catchAsyncErrors(async (req, res, next) => {
  const clip = await ShortClipModel.create(req.body);
  sendResponse(true, 200, "data", clip, res);
});

// DELETE
exports.deleteClip = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const deleted = await ShortClipModel.findByIdAndDelete(id);

  if (deleted) {
    const imgPath = path.resolve(
      __dirname,
      "../../" + "public/videos/shortClips",
      deleted.clip
    );
    fs.unlinkSync(imgPath);
  }

  sendResponse(true, 200, "data", deleted, res);
});

// UPDATE
exports.updateClip = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;

  const updated = await ShortClipModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  const allClips = getFiles(
    path.resolve(__dirname, "../../" + "public/videos/shortClips")
  );
  const clips = await ShortClipModel.find().select("clip -_id");
  const filteredClips = clips.map(({ clip }) => clip);
  const cleanedClipsArray = [...new Set(filteredClips.flat(Infinity))];

  for (let i = 0; i < allClips.length; i++) {
    if (!cleanedClipsArray.includes(allClips[i])) {
      fs.unlinkSync(
        path.resolve(
          __dirname,
          "../../" + "public/videos/shortClips",
          allClips[i]
        )
      );
    }
  }

  sendResponse(true, 200, "data", updated, res);
});

// Get all
exports.allClips = catchAsyncErrors(async (req, res, next) => {
  const all = await ShortClipModel.find().sort({ createdAt: -1 });
  sendResponse(true, 200, "data", all, res);
});
