const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const siteSchema = new Schema({
  siteData: {
    company_name: {type: String, default: ""},
    contact_name: {type: String, default: ""},
    contact_email: {type: String, default: ""},
    contact_phone: {type: String, default: ""},
    contact_location: {type: String, default: ""},
    contact_facebook_link: {type: String, default: ""},
    contact_instagram_link: {type: String, default: ""},
    contact_twitter_link: {type: String, default: ""},
  },
  homePage : {
    banner_1_title: {type: String, default: ""},
    banner_1_body: {type: String, default: ""},
    banner_1_link_button_text: {type: String, default: ""},
    banner_1_link: {type: String, default: ""},
    
    banner_2_title: {type: String, default: ""},
    banner_2_body: {type: String, default: ""},
    banner_2_link_button_text: {type: String, default: ""},
    banner_2_link: {type: String, default: ""},
    
    about_statement_title: {type: String, default: ""},
    about_statement_body: {type: String, default: ""},
    
    stat_1_title: {type: String, default: ""},
    stat_1_body: {type: String, default: ""},
    stat_1_link_button_text: {type: String, default: ""},
    stat_1_link: {type: String, default: ""},
        
    stat_2_title: {type: String, default: ""},
    stat_2_body: {type: String, default: ""},
    stat_2_link_button_text: {type: String, default: ""},
    stat_2_link: {type: String, default: ""},
    
    stat_3_title: {type: String, default: ""},
    stat_3_body: {type: String, default: ""},
    stat_3_link_button_text: {type: String, default: ""},
    stat_3_link: {type: String, default: ""},

    additional_box_1_title: {type: String, default: ""},
    additional_box_1_body: {type: String, default: ""},
    additional_box_1_link_button_text: {type: String, default: ""},
    additional_box_1_link: {type: String, default: ""},

    additional_box_2_title: {type: String, default: ""},
    additional_box_2_body: {type: String, default: ""},
    additional_box_2_link_button_text: {type: String, default: ""},
    additional_box_2_link: {type: String, default: ""},
  },
  servicesPage: {
    title: {type: String, default: ""},
    body: {type: String, default: ""},
    link_button_text: {type: String, default: ""},
    link: {type: String, default: ""},
  }
});

const Site = mongoose.model("Site", siteSchema);

module.exports = Site;
