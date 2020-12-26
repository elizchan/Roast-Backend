const db = require('../models/index')
const Cafe = db.cafe
const User = db.user
const Comment = db.comments



exports.displayComments = (req, res) => {
    //find all cafes from certain YelpId
    Comment.find().populate('User')
    .exec(function(err, comment) {
        if (err) {console.log(err)}
        console.log(comment)
    })
    // .then(data=>{
    //     res.send(data)
    // })
    // .catch(err=>{
    //     res.send(err)
    // })
}
// exports.deleteComments = (req, res) => {
//     //delete a comment with id from model
// }
exports.addComment = (req, res) => {
    const Content = req.body.content
    const comment = new Comment({
        Content: Content,
        // CafeId: Cafe._YelpId
    })
    comment.save((comment, err)=>{
        if(err){
            res.status(500).send({message: err})
            return
        }
        res.send(comment, {message:"Comment created successfully."})
    })
}
// exports.editComments = (req, res) => {
//     //model
// }
