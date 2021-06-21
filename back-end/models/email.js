const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emailSchema = new Schema({
  userName: String,
  email: String,
});

const Email = mongoose.model("Email", emailSchema);

module.exports = Email;
