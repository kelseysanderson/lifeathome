// require('dotenv').config();
const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || process.env.LOCAL_DB_KEY, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false})
.then(()=> console.log('DB CONNECTED'));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});