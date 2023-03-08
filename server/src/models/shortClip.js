const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const shortClipSchema = new Schema({
  clip: {
    type: String,
    trim: true,
    required: [true, "Please Upload a Video"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ShortClipModel = new model("shortClip", shortClipSchema);
module.exports = ShortClipModel;
