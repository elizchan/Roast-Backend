const db = require('../models/index')
// const { user, cafe } = require('../models/index')
const Cafe = db.cafe
const User = db.user
//click add favorites adds Yelp Id to favorites array in user model and cafe model
//make sure favorited cafe is the same across different users if multiple users like the same cafe
//look at auth controller example on user

 
//add new cafe and yelp information
exports.addCafe = (req, res) => {
        const YelpId = req.body.YelpId
        const Name = req.body.Name
        const Address = req.body.Address
        const City = req.body.City
        const Rating = req.body.Rating
        const ImageURL = req.body.ImageURL
        const YelpURL = req.body.YelpURL
        const newCafe = new Cafe({
            YelpId,
            Name,
            Address,
            City, 
            Rating, 
            ImageURL,
            YelpURL
        })
        newCafe.save((err, cafe)=>{
            if (err) {
                res.status(500).send({message: err})
                return
            } else {
                res.send(cafe)
            }
        })
}


exports.findFavorite = (req, res) =>{
   
    Cafe.findOne({YelpId: req.body.YelpId}) 
    
    .then(data =>{
        console.log("!!!", req.body.YelpId)
        res.send(data)
    })
}