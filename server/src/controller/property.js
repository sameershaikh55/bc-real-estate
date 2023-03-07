const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const PropertyModel = require("../models/property");
const sendResponse = require("../utils/sendResponse");
const getFiles = require("../utils/getFiles");
const propertyFilter = require("../utils/propertyFilter");
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

  const previousImages =
    (req.body.previousImages && req.body.previousImages.split(",")) || [];
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
  const properties = await PropertyModel.find().sort({ createdAt: -1 });

  const propertiesPerPage = 15;
  const page = parseInt(req.query.page) || 1;
  const startIndex = (page - 1) * propertiesPerPage;
  const endIndex = page * propertiesPerPage;

  const searchKeyword = req.query.search;
  let filteredProperties = properties;

  if (searchKeyword) {
    filteredProperties = propertyFilter(properties, searchKeyword);
  }

  const currentPageProperties = filteredProperties.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  sendResponse(
    true,
    200,
    "data",
    {
      properties: [...currentPageProperties],
      totalProperties: properties.length,
      currentPagetotalProperties: currentPageProperties.length,
      propertiesPerPage,
      totalPages,
      currentPage: page,
      totalResults: filteredProperties.length,
    },
    res
  );
});

// Get property Details
exports.getPropertyDetails = catchAsyncErrors(async (req, res, next) => {
  const property = await PropertyModel.findById(req.params.id);

  if (!property) {
    return next(new ErrorHandler("Property not found", 404));
  }

  sendResponse(true, 200, "data", property, res);
});
