const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemScheme = new Schema(
  {
    sender: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
    shipment: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemScheme);
