const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: "Post"
  },
  replies: {
    type: [String],
  },
  body: String,
  date_posted: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
