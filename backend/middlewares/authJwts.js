const jwt = require('jsonwebtoken')
const config = require('../config/auth.config')
const db = require('../models/index')
const User = db.user
const Role = db.role

//Function that verifies our web token
verifyWebToken = (req, res, next) => {
    //Declare our token which is passed in our headers
    let token = req.headers['x-access-token']
    //If no token given, we respond with an error
    if(!token) {
        return res.status(403).send({message: 'No token provided.'})
    }
    //Try to verify the token
    jwt.verify(token, config.secret, (err, decoded)=>{
        if (err) {
            return res.status(401).send({message: 'Unauthorized'})
        }
        //set user id to decoded id
        req.userId = decoded.id
        next()


    })
}

isAdmin = (req, res, next) => {
    //.exec return the user we want to have access to
    User.findOne({_id: req.userId}).exec((err, user)=>{
        //throwing an error because this user does not excst
        if (err) {
            return res.status(500).send({message: err})
        }
        console.log(user)
        Role.find({
            _id: {$in: user.roles}
        }, (err, roles)=>{
            if (err) {
                return res.status(500).send({message: err})
            }
            for(let i = 0; i < roles.length; i++) {
                if(roles[i].name === 'admin'){
                    next()
                    return
                }
            }

            res.status(403).send({message: "Requires admin role."})

        })
    })
}

const authJwt = {
    verifyWebToken,
    isAdmin
}

module.exports = authJwt