const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const testimonialSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
    trim: true,
  },
  personImage: {
    type: String,
    trim: true,
    required: [true, "Please Upload an Image"],
  },
  message: {
    type: String,
    trim: true,
    required: [true, "Please Enter message"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TestimonialModel = new model("testimonial", testimonialSchema);
module.exports = TestimonialModel;
