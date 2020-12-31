const db = require('../models/index')
// const { user, cafe } = require('../models/index')
const Cafe = db.cafe
const User = db.user
//click add favorites adds Yelp Id to favorites array in user model and cafe model
//make sure favorited cafe is the same across different users if multiple users like the same cafe
//look at auth controller example on user

 
//add new cafe and yelp information
exports.addCafe = (req, res) => {
        //add a new cafe to model (model.create)
        const YelpId = req.body.YelpId
        const Name = req.body.Name
        const Address = req.body.Address
        const City= req.body.City
        const Rating = req.body.Rating
        const ImageURL= req.body.ImageURL
        const YelpURL = req.body.YelpURL
        //if yelp does not exist in db then run code below
        const cafe = new Cafe ({
            YelpId
            // Name,
            // Address,
            // City,
            // Rating,
            // ImageURL,
            // YelpURL
        })   
        cafe.save(cafe)
        console.log(cafe)
        .then((data)=>{
            res.send(data)
        })
        .catch(err=>{
            res.send(err, cafe)
        })
}

exports.allCafes = (req,res) => {
    Cafe.find()
    .then(data => {
        res.send(data)
    })
}





//Testing github