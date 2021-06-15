const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homeSchema = new Schema({
  hero_image_ref: String,
  banner: [
    {
      title: String,
      body: String,
      link_name: String,
      link_ref: String
    }
  ],
  about_statement: String,
  catchy_stats: [
    {
      body: String,
      stat_disaply: String,
    }
  ],
  additional_boxes: [
    {
      title: String,
      body: String,
      link_name: String,
      link_ref: String
    }
  ],
});

const Home = mongoose.model("Home", homeSchema);

module.exports = Home;
