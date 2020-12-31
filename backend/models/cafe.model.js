const mongoose = require("mongoose")

const Cafe = mongoose.model(
    "Cafe",
    new mongoose.Schema({
       yelpId: String,
       Name: String,
       Address: String,
       City: String,
       Rating: Number,
       ImageURL: String,
       YelpURL: String
    })
)

module.exports = Cafe