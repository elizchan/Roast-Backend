const db = require('../models/index')
//access to our db through User and Role variable
const User = db.user

exports.allAccess = (req, res) => {
    res.status(200).send('public content')
}

exports.userBoard = (req, res) => {
    res.status(200).send("user content")
}

exports.adminBoard = (req, res) => {
    res.status(200).send("admin content")
}

exports.getAllFavorites = (req, res) =>{
    id = req.params.id
    User.findById(id)
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        res.send(error)
    })
}

exports.deleteFavorite = (req, res) => {
    id = req.params.id
    yelpId = req.body.yelpId
    User.findByIdAndUpdate(id, {$pull: {favorites: yelpId}})
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        res.send(error)
    })
}

exports.addFavorites = (req, res) => {
    const id = req.body.id
    const YelpId = req.body.YelpId
    User.findByIdAndUpdate(id, {$push: {"favorites": YelpId}},
    {new: true}
    )
    .then((data)=>{
        res.send(data)
    })
    .catch(err=>{
        res.send(err)
    })
}
