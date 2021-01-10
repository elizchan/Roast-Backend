const db = require('../models/index')
// const { user, cafe } = require('../models/index')
const Cafe = db.cafe
const User = db.user
//click add favorites adds Yelp Id to favorites array in user model and cafe model
//make sure favorited cafe is the same across different users if multiple users like the same cafe
//look at auth controller example on user

 
//add new cafe and yelp information
exports.addCafe = (req, res) => {
    const YelpId = req.body.YelpId;
    const Name = req.body.Name;
    const Address = req.body.Address;
    const City = req.body.City;
    const Rating = req.body.Rating;
    const ImageURL = req.body.ImageURL;
    const YelpURL = req.body.YelpURL;
    Cafe.findOne({ YelpId: YelpId }, function (err, cafe) {
      if (err) {
        console.log(err);
      }
      if (cafe) {
        // console.log("this cafe already exists in the database")
        return;
      } else {
        const newCafe = new Cafe({
          YelpId,
          Name,
          Address,
          City,
          Rating,
          ImageURL,
          YelpURL,
        });
        newCafe.save((err, cafe) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          } else {
            res.send(cafe);
            // console.log(cafe, "cafe saved");
          }
        });
      }
    });
  };
  



exports.findFavorite = (req, res) =>{
   
    Cafe.findOne({YelpId: req.body.YelpId}) 
    
    .then(data =>{
        // console.log("!!!", req.body.YelpId)
        res.send(data)
    })
}

// DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated. See: https://mongoosejs.com/docs/deprecations.html#findandmodify
// (Use `node --trace-deprecation ...` to show where the warning was created)