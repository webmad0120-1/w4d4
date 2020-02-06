const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaName = new Schema(
  {
    name: String,
    minHeight: { type: Number, min: 100, max: 250 },
    category: { type: String, enum: ["rollercoaster", "hit and run", "motor"] }
  },
  { timestamps: true }
);

const Model = mongoose.model("Rides", schemaName);
module.exports = Model;
