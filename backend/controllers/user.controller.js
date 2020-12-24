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
    User.findById(id)
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        res.send(error)
    })
}

