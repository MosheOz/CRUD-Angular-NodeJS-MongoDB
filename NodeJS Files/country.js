const mongoose = require("mongoose");

const countrySchema = mongoose.Schema({
    name: String,
    language: String
});

const Country = mongoose.model("Country", countrySchema, "countries");

module.exports = Country;