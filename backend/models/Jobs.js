const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jobsSchema = new Schema({
  company: {
    type: String,
    requied: true,
  },
  title: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
  desc: {
    type: String,
  },
});

module.exports = mongoose.model("jobs", jobsSchema);
