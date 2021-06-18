const mongoose = require("mongoose");
const db = require("./models");
const dotenv = require("dotenv");
dotenv.config();


mongoose.connect(
    "mongodb://localhost/lifeathome"
    );

const commentSeed = [
  {
    postId: "60cd0878c6126d13802f0571",
    body:
    "This is test 1 comment",
    date_posted: new Date(Date.now()),
  },
  {
    postId: "60cd0878c6126d13802f0571",
    body:
    "This is test 2 comment",
    date_posted: new Date(Date.now()),
  },
  {
    postId: "60cd0878c6126d13802f0572",
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
