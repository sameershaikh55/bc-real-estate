const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const validator = require("validator");

const newsletterSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please Enter Email"],
    trim: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  promoCode: {
    type: String,
    trim: true,
  },
  area: {
    type: String,
    required: [true, "Please Select Area"],
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const NewsletterModel = new model("newsletter", newsletterSchema);
module.exports = NewsletterModel;
