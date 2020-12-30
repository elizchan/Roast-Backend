const db = require('../models/index')
const Cafe = db.cafe
const User = db.user
const Comment = db.comments

//changing all ids to yelpIds - now comment model does not reference the cafe model but rather just references the yelpID

exports.displayComments = (req, res) => {
    //find all cafes from certain cafeId
    Comment.find({CafeId: req.body.yelpId}).then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.send(err)
    })
}


exports.addComment = (req, res) => {
    const content = req.body.content
    const yelpId = req.body.yelpId
    const userId = req.body.userId
    const newComment = new Comment({
        Content: content,
        UserId: userId,
        CafeId: yelpId
    })
    newComment.save(newComment).then((data)=> {
        res.send(data)
    }).catch((err)=> {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Comment"
        })
    })
}

exports.editComments = (req, res) => {
    const userId = req.body.userId
    const yelpId = req.body.yelpId
    const Content = req.body.content
    Comment.findOneAndUpdate({UserId: userId, CafeId: yelpId}, {Content: Content}).then((data)=>{
        res.send(data)
    }).catch((err)=> {
        res.status(500).send({
            message:
            err.message || "Some error occurred while updating the Comment"
        })
})
}

exports.deleteComments = (req, res) => {
    //delete a comment with id from model
    const userId = req.body.userId
    const yelpId = req.body.yelpId
    //delete where user and id match commment
    Comment.findOneAndDelete({UserId: userId, CafeId: yelpId}, function(err){
        if(err) {console.log(err)} else {console.log('successful deletion!')}
    }).then(data=>{
        res.send(data)
    })
}
  
    
   