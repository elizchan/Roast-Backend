const db = require('../models/index')
const Cafe = db.cafe
const User = db.user
const Comment = db.comments



exports.displayComments = (req, res) => {
    //find all cafes from certain cafeId
    Comment.find({CafeId: req.body.cafeId}).then(data=>{
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
        Content: Content,
        UserId: UserId,
        CafeId: CafeId
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
    //model
}

exports.deleteComments = (req, res) => {
    //delete a comment with id from model
    const userId = req.body.userId
    const id = req.body.id
    //delete where user and id match commment
    Comment.findOneAndDelete({UserId: userId, _id: id}, function(err){
        if(err) {console.log(err)} else {console.log('successful deletion!')}
    }).then(data=>{
        res.send(data)
    })
}
  
    
   