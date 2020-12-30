const db = require('../models/index')
const { user, cafe } = require('../models/index')
const Cafe = db.cafe
const User = db.user
//click add favorites adds Yelp Id to favorites array in user model and cafe model
//make sure favorited cafe is the same across different users if multiple users like the same cafe
//look at auth controller example on user

//original add cafe route
exports.addCafe = (req, res) => {
    //add a new cafe to model (model.create)
    const YelpId = req.body.YelpId
    //if yelp does not exist in db then run code below
    const cafe = new Cafe ({
        YelpId: YelpId
    })   
    //save cafe to current user
    cafe.save(cafe)
    //else push favorite to current user favorite
    const id = req.body.id

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

//add cafe's yelp id to the cafe model
exports.addYelpId = (req, res) => {
        //add a new cafe to model (model.create)
        const YelpId = req.body.YelpId
        //if yelp does not exist in db then run code below
        const cafe = new Cafe ({
            YelpId
        })   
        //save cafe to current user
        cafe.save()
        .then((data)=>{
            res.send(data)
        })
        .catch(err=>{
            res.send(err)
        })
}



// exports.allCafes = (req,res) => {
//     Cafe.find()
//     .then(data => {
//         res.send(data)
//     })
// }





//Testing github