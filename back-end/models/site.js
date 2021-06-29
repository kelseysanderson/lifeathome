const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const siteSchema = new Schema({
  siteData: {
    company_name: {type: String, default: ""},
    contact: {
      name: {type: String, default: ""},
      email: {type: String, default: ""},
      phone: {type: String, default: ""},
      location: {type: String, default: ""},
      facebook_link: {type: String, default: ""},
      instagram_link: {type: String, default: ""},
      twitter_link: {type: String, default: ""},
    }
  },
  homePage : {
    banner_1: {
      title: {type: String, default: ""},
      body: {type: String, default: ""},
      link_button_text: {type: String, default: ""},
      link: {type: String, default: ""},
    },

    banner_2: {
      title: {type: String, default: ""},
      body: {type: String, default: ""},
      link_button_text: {type: String, default: ""},
      link: {type: String, default: ""},
    },
    
    about_statement: {
      title: {type: String, default: ""},
      body: {type: String, default: ""},
    },
    
    stat_1: {
      title: {type: String, default: ""},
      body: {type: String, default: ""},
      link_button_text: {type: String, default: ""},
      link: {type: String, default: ""},
    },

        
    stat_2: {
      title: {type: String, default: ""},
      body: {type: String, default: ""},
      link_button_text: {type: String, default: ""},
      link: {type: String, default: ""},
    },
    
    stat_3: {
      title: {type: String, default: ""},
      body: {type: String, default: ""},
      link_button_text: {type: String, default: ""},
      link: {type: String, default: ""},
    },

    additional_box_1:{
      title: {type: String, default: ""},
      body: {type: String, default: ""},
      link_button_text: {type: String, default: ""},
      link: {type: String, default: ""},
    },

    additional_box_2:{
      title: {type: String, default: ""},
      body: {type: String, default: ""},
      link_button_text: {type: String, default: ""},
      link: {type: String, default: ""},
    },

  },
  servicesPage: {
    posts: [{
      title: {type: String, default: ""},
      body: {type: String, default: ""},
      link_button_text: {type: String, default: ""},
      link: {type: String, default: ""},
    }]
  },

  login: {
    username: {type: String, default: ""},
    password: {type: String, default: ""}
  }
});

const Site = mongoose.model("Site", siteSchema);

module.exports = Site;
