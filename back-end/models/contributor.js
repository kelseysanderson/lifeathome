const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contributorSchema = new Schema({
  name: String,
  job: String,
  description: String, 
  img_src: String,
  body: String,
  external_link: String,
  embedded_video_link: String,
  tags: [String],
});

const Contributor = mongoose.model("Contributor", contributorSchema);

module.exports = Contributor;
