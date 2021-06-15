const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const siteSchema = new Schema({
  favicon_ref: String,
  logo_ref: String,
  logo_greyscale_ref: String,
  company_name: String,
  page_links: [String], 
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
});

const Site = mongoose.model("Site", siteSchema);

module.exports = Site;
