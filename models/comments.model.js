const mongoose = require("mongoose")

const Comment = mongoose.model(
    "Comment",
    new mongoose.Schema({
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        content: String,
        cafeId: String
        })
)

module.exports = Comment