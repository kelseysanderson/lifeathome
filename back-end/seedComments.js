const mongoose = require("mongoose");
const db = require("./models");
const dotenv = require("dotenv");
dotenv.config();


mongoose.connect(
  process.env.LOCAL_DB_KEY
  );

const commentSeed = [
  {
    postId: ObjectId("60cd17551d1a5d182af875ab"),
    body:
    "This is test 1 comment",
    date_posted: new Date(Date.now()),
  },
  {
    postId:  ObjectId("60cd17551d1a5d182af875ab"),
    body:
    "This is test 2 comment",
    date_posted: new Date(Date.now()),
  },
  {
    postId: ObjectId("60cd17551d1a5d182af875ac"),
    body:
    "This is test 3 comment",
    date_posted: new Date(Date.now()),
  },

];

db.Comment
  .remove({})
  .then(() => db.Comment.collection.insertMany(commentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
