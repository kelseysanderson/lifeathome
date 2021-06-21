const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  description: String, 
  img_src: String,
  date_posted: Date,
  body: String,
  external_link: String,
  embedded_video_link: String,
  comments: {
    type: [Schema.Types.ObjectId],
    ref: 'Comment',
  }  
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
