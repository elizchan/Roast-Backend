const mongoose = require("mongoose")

const Comments = mongoose.model(
    "Comments",
    new mongoose.Schema({
        UserId: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }],
        Content: String,
        CafeId: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cafe"
        }]       
        
    })
)

module.exports = Comments