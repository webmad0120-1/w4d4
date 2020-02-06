const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaName = new Schema(
  {
    name: String,
    surname: String,
    age: Number,
    salary: Number,
    dept: { type: String, enum: ["web", "devops", "accountant"] }
  },
  { timestamps: true }
);

const Model = mongoose.model("Employees", schemaName);
module.exports = Model;
