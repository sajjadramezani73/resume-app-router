const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    title: {
      fa: { type: String, required: true },
      en: { type: String, required: true },
    },
    briefDescription: {
      fa: { type: String, required: true },
      en: { type: String, required: true },
    },
    description: {
      fa: { type: String, required: true },
      en: { type: String, required: true },
    },
    skills: { type: [String], default: [] },
    links: { type: Array, default: [] },
    images: [{ type: Schema.Types.ObjectId, ref: "File" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
