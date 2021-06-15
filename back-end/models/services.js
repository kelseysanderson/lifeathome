const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const servicesSchema = new Schema({

});

const Services = mongoose.model("Services", servicesSchema);

module.exports = Services;
