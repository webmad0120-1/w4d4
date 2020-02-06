const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaName = new Schema(
  {
    name: String,
    surname: String,
    age: Number,
    genre: { type: String, enum: ["h", "m", "trans", "n/a"] }
  },
  { timestamps: true }
);

const Model = mongoose.model("Customers", schemaName);
module.exports = Model;
