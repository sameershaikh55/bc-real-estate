const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const promoCodeSchema = new Schema({
  promoCode: {
    type: String,
    required: [true, "Please Enter Promo Code"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PromoCodeModel = new model("promocode", promoCodeSchema);
module.exports = PromoCodeModel;
