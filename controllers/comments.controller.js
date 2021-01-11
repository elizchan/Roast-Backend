const db = require('../models/index')
const Cafe = db.cafe
const User = db.user
const Comment = db.comment

//changing all ids to yelpIds - now comment model does not reference the cafe model but rather just references the yelpID

exports.displayComments = (req, res) => {
    //find all cafes from certain cafeId
    const id = req.params.id
    // Comment.find({cafeId: cafeId}).populate('userId')
    Comment.find({cafeId: id}).populate('userId')
    .exec(function(err, data){
        res.send(data)
})
}


exports.addComment = (req, res) => {
    const userId = req.body.userId
    const content = req.body.content
    const cafeId = req.body.cafeId
    const comment = new Comment({
        content,
        cafeId
    })
    comment.save((err, comment)=>{
        if (err) {
            res.status(500).send({message: err})
            return
        } else {
            User.findOne({_id: userId}, (err, user)=>{
                if(err) {
                    res.status(500).send({message: err})
                    return
                }
                comment.userId = user._id
                comment.save(err => {
                    if(err) {
                        res.status(500).send({message: err})
                        return
                    }
                    res.send({message: "comment was made successfully referencing user"})
                })
    })
}
})
console.log(comment)
}






exports.editComments = (req, res) => {
    const id = req.params.id
    const content = req.body.content
    Comment.findByIdAndUpdate(id, {content: content}).then((data)=>{
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
    // const userId = req.body.userId
    // const yelpId = req.body.yelpId
    //delete where user and id match commment
    // Comment.findOneAndDelete({userId: userId, cafeId: yelpId}, function(err){
    //     if(err) {console.log(err)} else {console.log('successful deletion!')}
    // }).then(data=>{
    //     res.send(data)
    // })
    const id = req.params.id
    
    Comment.findByIdAndRemove(id, {useFindAndModify: false})
    .then(data=>{
        res.status(200).send(data)
    })
    .catch(err=>{console.log("error deleting comment:", err)})
}
  
    
   