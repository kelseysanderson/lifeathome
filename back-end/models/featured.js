const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const featuredSchema = new Schema({
  name: String,
  job: String,
  place: String,
  description: String, 
  img_src: String,
  body: String,
  external_link: String,
  embedded_video_link: String,
  tags: [String],
});

const Featured = mongoose.model("Featured", featuredSchema);

module.exports = Featured;
