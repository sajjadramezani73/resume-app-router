const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FileSchema = new Schema({
  url: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
});

module.exports = mongoose.model("File", FileSchema);
