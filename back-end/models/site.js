const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const siteSchema = new Schema({
  favicon_ref: String,
  logo_ref: String,
  logo_greyscale: String,
  company_name: String,
  page_links: String, 
  copyright: String, 
  date: {type: Date, default: Date.now},

  contact: {
    name: String,
    email: String,
    phone: String,
    location: String,
    facebook_link: String,
    instagram_link: String,
    twitter_link: String,
  },

  home: {
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
  },

  services: {

  },

  blog: {
    posts:[
      {
        title: String,
        discription: String, 
        img_src: String,
        date_posted: Date,
        body: String,
        external_link: String,
        embedded_video_link: String,
        comments:[
          {
            username: String,
            body: String,
            date_posted: Date,
          }
        ]
      }
    ]
    
  }
});

const Site = mongoose.model("Site", siteSchema);

module.exports = Site;
