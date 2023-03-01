const mongoose = require("mongoose");
const ErrorHandler = require("../utils/errorhandler");
const { Schema, model } = mongoose;

const propertySchema = new Schema({
  title: { type: String, trim: true, required: [true, "Please Enter Name"] },
  // description: {
  //   type: String,
  //   trim: true,
  //   required: [true, "Please Enter Description"],
  // },
  // location: {
  //   type: String,
  //   trim: true,
  //   required: [true, "Please Enter Location"],
  // },
  // beds: {
  //   type: String,
  //   trim: true,
  //   required: [true, "Please Enter Beds"],
  // },
  // baths: {
  //   type: String,
  //   trim: true,
  //   required: [true, "Please Enter Baths"],
  // },
  // sqft: {
  //   type: String,
  //   trim: true,
  //   required: [true, "Please Enter Sqft"],
  // },
  status: {
    type: String,
    enum: ["notActive", "Active"],
    default: "Active",
  },
  propertyImages: [
    {
      type: String,
      trim: true,
    },
  ],

  // propertyImages: [
  //   {
  //     type: String,
  //     trim: true,
  //   },
  // ],
  // propertyDetails: {
  //   price: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Price"],
  //   },
  //   bedrooms: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Bedrooms"],
  //   },
  //   fullBaths: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Full Baths"],
  //   },
  //   halfBaths: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Half Baths"],
  //   },
  //   totalBaths: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Total Baths"],
  //   },
  //   propertyStyle: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Property Style"],
  //   },
  //   lotSizeArea: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Lot Size Area"],
  //   },
  //   acres: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Acres"],
  //   },
  //   propertyType: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Property Type"],
  //   },
  //   stories: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Stories"],
  //   },
  //   features: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Features"],
  //   },
  //   exteriorFeatures: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Exterior Features"],
  //   },
  //   yearBuilt: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Year Built"],
  //   },
  //   subdivision: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Subdivision"],
  //   },
  //   roof: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Roof"],
  //   },
  //   heating: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Heating"],
  //   },
  //   foundation: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Foundation"],
  //   },
  //   lotDescription: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Lot Description"],
  //   },
  //   parkingDescription: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Parking Description"],
  //   },
  //   garageSpaces: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Garage spaces"],
  //   },
  //   additionalRooms: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Additional Rooms"],
  //   },
  // },
  // geographicData: {
  //   directions: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter directions"],
  //   },
  //   county: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter county"],
  //   },
  //   latitude: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter latitude"],
  //   },
  //   longitude: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter longitude"],
  //   },
  //   marketArea: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter market area"],
  //   },
  // },
  // addressInformation: {
  //   address: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter address"],
  //   },
  //   postalCode: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter postal code"],
  //   },
  //   city: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter city"],
  //   },
  //   state: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter state"],
  //   },
  //   country: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter country"],
  //   },
  // },
  // listingInformation: {
  //   listingOffice: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Listing Office"],
  //   },
  //   listingOfficePhone: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Listing Office Phone"],
  //   },
  //   listingAgent: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Listing Agent"],
  //   },
  //   listingAgentPhone: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Listing Agent Phone"],
  //   },
  //   terms: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Terms"],
  //   },
  //   virtualTourURL: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Virtual Tour URL"],
  //   },
  // },
  // schoolInformation: {
  //   district: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter the district name"],
  //   },
  //   elementarySchool: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter the elementary school name"],
  //   },
  //   middleSchool: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter the middle school name"],
  //   },
  //   highSchool: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter the high school name"],
  //   },
  // },
  // mlsInformation: {
  //   daysOnMarket: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Days on market"],
  //   },
  //   mlsStatus: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter MLS Status"],
  //   },
  //   listingDate: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Listing Date"],
  //   },
  //   listingLastModified: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Listing Last Modified"],
  //   },
  //   taxID: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Tax ID"],
  //   },
  //   taxYear: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter Tax Year"],
  //   },
  //   mlsArea: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter MLS Area"],
  //   },
  //   mlsString: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Please enter MLS #"],
  //   },
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

propertySchema.pre("save", function (next) {
  if (this.propertyImages.length < 1) {
    return next(new ErrorHandler("Add atleast one Product Image", 422));
  } else {
    next();
  }
});

const PropertyModel = new model("property", propertySchema);
module.exports = PropertyModel;
