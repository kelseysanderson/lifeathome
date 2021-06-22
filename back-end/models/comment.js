const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  userName: {
    type: String
  },
  body: String,
  replies: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  },
  date_posted: {type: Date, default: Date.now},
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
