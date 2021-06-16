const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const siteSchema = new Schema({
  image_ref: {
    favicon: String,
    logo: String,
    logo_greyscale: String,
  },
  company_name: String,
  nav_link: [String], 
  copyright: String, 

  home_page: {  
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
    catchy_stat: [
      {
        body: String,
        stat_display: String,
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
  },

  services_page: {},

  blog_page: {},

  contact: {
    name: String,
    email: String,
    phone: String,
    location: String,
    facebook_link: String,
    instagram_link: String,
    twitter_link: String,
  },
});

const Site = mongoose.model("Site", siteSchema);

module.exports = Site;
