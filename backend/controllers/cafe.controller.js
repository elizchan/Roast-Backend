import db, { user } from "../models/index"
const Cafe = db.cafe
const User = db.user
//click add favorites adds Yelp Id to favorites array in user model and cafe model
//make sure favorited cafe is the same across different users if multiple users like the same cafe
//look at auth controller example on user
exports.addCafe = (req, res) => {
    //add a new cafe to model (model.create)
    const YelpId = req.body.YelpId
    //if yelp does not exist in db then run code below
    const cafe = new Cafe ({
        YelpId: YelpId
    })   
    //save cafe to current user
    cafe.save()
    //else push favorite to current user favorite
    const id = req.body.id
    db.user.findByIdAndUpdate(id, YelpId)
    .then((user)=> {
        user.favorites.push(YelpId)
        res.send({message: "user favorites update"})
    })
    .catch(err=>{
        res.send(err)
    })
    user.save()
}