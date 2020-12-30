const mongoose = require("mongoose")

const Comment = mongoose.model(
    "Comment",
    new mongoose.Schema({
        userId: String,
        content: String,
        cafeId: String
        })
)

module.exports = Comment