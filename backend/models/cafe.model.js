const mongoose = require("mongoose")

const Cafe = mongoose.model(
    "Cafe",
    new mongoose.Schema({
       YelpId: String
    //    Name: String,   
    })
)

module.exports = Cafe