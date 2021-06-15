const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
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
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
