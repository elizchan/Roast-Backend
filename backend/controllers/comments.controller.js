const db = require('../models/index')
const Cafe = db.cafe
const User = db.user
const Comment = db.comments



exports.displayComments = (req, res) => {
    //find all cafes from certain cafeId
    Comment.find({CafeId: {$in: req.body.cafeId}}).then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.send(err)
    })
}


exports.addComment = (req, res) => {
    const Content = req.body.content
    const CafeId = req.body.cafeId
    const UserId = req.body.userId
    const newComment = new Comment({
        Content: Content
    })
        //save the new comment after finding in the cafe model where the ids are the same
        Cafe.findById(CafeId).then((cafe)=> {
            //add error here
            newComment.CafeId.push(cafe)
            newComment.save()
         })
         //now, do the same for userId
         User.findById(UserId).then((user)=> {
             //add error here
            newComment.UserId.push(user)
            newComment.save()
            res.send(newComment)
         })
}




// exports.editComments = (req, res) => {
//     //model
// }

// exports.deleteComments = (req, res) => {
//     //delete a comment with id from model
// }