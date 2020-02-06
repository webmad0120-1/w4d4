const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaName = new Schema(
  {
    name: String,
    nif: String,
    category: { type: String, enum: ["amusement", "drinks and beverage", "food"] }
  },
  { timestamps: true }
);

const Model = mongoose.model("Services", schemaName);
module.exports = Model;
