const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const PropertyModel = require("../models/property");
const sendResponse = require("../utils/sendResponse");
const getFiles = require("../utils/getFiles");
const path = require("path");
const fs = require("fs");
const ErrorHandler = require("../utils/errorhandler");

// ADD
exports.createProperty = catchAsyncErrors(async (req, res, next) => {
  const images = req.files.map(({ filename }) => filename);
  req.body.propertyImages = [...images];
  const properties = await PropertyModel.create(req.body);
  sendResponse(true, 200, "data", properties, res);
});

// DELETE
exports.deleteProperty = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const deleted = await PropertyModel.findByIdAndDelete(id);

  if (deleted) {
    for (let i = 0; i < deleted.propertyImages.length; i++) {
      const imgPath = path.resolve(
        __dirname,
        "../../" + "public/images/properties",
        deleted.propertyImages[i]
      );
      fs.unlinkSync(imgPath);
    }
  }

  sendResponse(true, 200, "data", deleted, res);
});

// UPDATE
exports.updateProperty = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const previousImages = JSON.parse(req.body.previousImages);
  const images = req.files.map((content) => content.filename);
  req.body.propertyImages = [...previousImages, ...images];

  if (!images.length && !previousImages.length) {
    return next(new ErrorHandler("Add atleast one Product Image", 422));
  }

  const updated = await PropertyModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  const allPropertiesImages = getFiles(
    path.resolve(__dirname, "../../" + "public/images/properties")
  );
  const properties = await PropertyModel.find().select("propertyImages -_id");
  const filteredProperties = properties.map(
    ({ propertyImages }) => propertyImages
  );
  const cleanedPropertiesArray = [
    ...new Set(filteredProperties.flat(Infinity)),
  ];

  for (let i = 0; i < allPropertiesImages.length; i++) {
    if (!cleanedPropertiesArray.includes(allPropertiesImages[i])) {
      fs.unlinkSync(
        path.resolve(
          __dirname,
          "../../" + "public/images/properties",
          allPropertiesImages[i]
        )
      );
    }
  }

  sendResponse(true, 200, "data", updated, res);
});

// Get all
exports.allProperties = catchAsyncErrors(async (req, res, next) => {
  const all = await PropertyModel.find();
  sendResponse(true, 200, "data", all, res);
});
