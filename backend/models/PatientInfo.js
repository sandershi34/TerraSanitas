const mongoose = require("mongoose");
//Schema
const Schema = mongoose.Schema;
const PatientInfoSchema = new Schema({
  name: String,
  body: String,
  date: String,
});

const PatientInfo = mongoose.model("PatientInfo", PatientInfoSchema);

module.exports = PatientInfo;
