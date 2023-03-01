const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const validator = require("validator");

const teamSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
    trim: true,
  },
  shortIntro: {
    type: String,
    required: [true, "Please Enter Short Intro"],
    trim: true,
    minLength: [60, "Password should be greater than 60 characters"],
  },
  longIntro: {
    type: String,
    required: [true, "Please Enter Long Intro"],
    trim: true,
    minLength: [512, "Password should be greater than 512 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Email"],
    trim: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  memberImage: {
    type: String,
    trim: true,
    required: [true, "Please Upload Member Image"],
  },
  phone: {
    type: String,
    trim: true,
  },
  facebook: {
    type: String,
    trim: true,
  },
  twitter: {
    type: String,
    trim: true,
  },
  instagram: {
    type: String,
    trim: true,
  },
  linkdin: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TeamModel = new model("team", teamSchema);
module.exports = TeamModel;
