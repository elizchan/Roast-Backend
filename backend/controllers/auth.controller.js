const config = require('../config/auth.config')
const db = require('../models/index')
//access to our db through User and Role variable
const User = db.user
const Role = db.role
//gives access to encode and decode the jwt itself
const jwt = require('jsonwebtoken')
//for hashing our passwords
const bcrypt = require('bcryptjs')


//This will handle stand up
exports.signup = (req, res) => {
    //make our user object using the params returned from our req
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
        
    })
    //save the user and if there is an error we throw that error
    //do we have to save everything we add to our databases?
    user.save((err, user)=> {
        if (err) {
            res.status(500).send({message: err})
            return
        }
        if(req.body.roles) {
            Role.find({
                name: {$in: req.body.roles}
            }, (err, roles)=>{
                if (err) {
                    res.status(500).send({message: err})
                    return
                }
                //pass roles id from query above to user.roles
                user.roles = roles.map(role => role._id)
                //save our updated user
                user.save((err)=>{
                    if(err){
                        res.status(500).send({message: err})
                        return
                    }
                    res.send({message:"User created successfully."})
                })
            })
        } else {
            //any user that doesn't give a role automatically gets a user role
            Role.findOne({name: "user"}, (err, role)=>{
                if(err) {
                    res.status(500).send({message: err})
                    return
                }
                //just assign users role id to document
                user.roles = [role._id]
                user.save(err => {
                    if(err) {
                        res.status(500).send({message: err})
                        return
                    }
                    res.send({message: "user was registered successfully"})
                })
            })
        }
    })
}

exports.signin = (req, res) => {
    User.findOne({
        username: req.body.username
    })
    //populates values from the roles id we stored in the document
    .populate("roles", "-__v")
    .exec((err, user)=>{
        if(err) {
            res.status(500).send({message: err})
            return
        }
        if(!user) {
            return res.status(404).send({message: "User not found."})
        }
        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        )
        if (!passwordIsValid) {
            return res.status(401).send({accessToken: null, message: "invalid password"})
        }
        //if password is valid, generate a new token
        const token = jwt.sign({id: user._id}, config.secret, {
            expiresIn: 86400 //expires token in 24 hours
        })
        //setting roles to pass back in our response
        let authorities = []
        for(let i=0; i<user.roles.length; i++) {
            authorities.push("ROLE_" + user.roles[i].name.toUpperCase())
        }
        res.status(200).send({
            id: user._id,
            username: user.username,
            email: user.email,
            roles: authorities,
            accessToken: token
        })
    })
}