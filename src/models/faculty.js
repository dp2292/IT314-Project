const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile_number: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  experience: { //in years
    type: Int16Array,
    required: true,
  },
  projects: {
    type: [String],
    required: true,
  },
  Awards_and_Honors: {
    type: [String],
    required: true,
 },
 Industrial_experience:{
    type: [String],
    required: true,
 },
 Publications: {
    type: [String],
    required: true,
 },

});

module.exports = mongoose.model("User", userSchema);
