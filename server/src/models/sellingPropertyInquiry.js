const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const validator = require("validator");

const sellingPropertyInquirySchema = new Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please Enter Email"],
    trim: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  phone: {
    type: Number,
    trim: true,
  },
  message: {
    type: String,
    required: [true, "Please Enter Message"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const SellingPropertyInquiryModel = new model(
  "sellingPropertyInquiry",
  sellingPropertyInquirySchema
);
module.exports = SellingPropertyInquiryModel;
