const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
  firstName: {
    fa: { type: String, required: true },
    en: { type: String, required: true },
  },
  lastName: {
    fa: { type: String, required: true },
    en: { type: String, required: true },
  },
  job: {
    fa: { type: String, required: true },
    en: { type: String, required: true },
  },
  address: {
    fa: { type: String, required: true },
    en: { type: String, required: true },
  },
  bio: {
    fa: { type: String, required: true },
    en: { type: String, required: true },
  },
  gender: {
    fa: { type: String, required: true },
    en: { type: String, required: true },
  },
  age: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  socialsNetwork: [
    {
      icon: { type: String, required: false },
      link: { type: String, required: false },
    },
  ],
  avatar: { type: String },
});

module.exports = mongoose.model("About", aboutSchema);
