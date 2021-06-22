const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  description: String, 
  img_src: String,
  body: String,
  external_link: String,
  embedded_video_link: String,
  comments: {
    type: [Schema.Types.ObjectId],
    ref: 'Comment',
  },
  date_posted: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
