const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  title: String,
  img_src: String,
  body: String,
  button_text: String,
  // ex: "blog", "contact", etc.
  internal_link: String,
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
