const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
  title: {
    fa: { type: String, required: true },
    en: { type: String, required: true },
  },
  company: {
    fa: { type: String, required: true },
    en: { type: String, required: true },
  },
  jobType: {
    fa: { type: String, required: true },
    en: { type: String, required: true },
  },
  jobTime: {
    fa: { type: String, required: true },
    en: { type: String, required: true },
  },
  dateStart: {
    fa: { type: String, required: true },
    en: { type: String, required: true },
  },
  dateEnd: { fa: { type: String }, en: { type: String } },
  soFar: { type: Boolean, default: false },
  description: {
    fa: { type: String, required: true },
    en: { type: String, required: true },
  },
  companyLink: { type: String },
  skill: { type: [String], default: [] },
});

module.exports = mongoose.model("Experience", experienceSchema);
