const db = require("../models/index");
const Cafe = require("../models/cafe.model");
//access to our db through User and Role variable
const User = db.user;

exports.allAccess = (req, res) => {
  res.status(200).send("public content");
};

exports.userBoard = (req, res) => {
  res.status(200).send("user content");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("admin content");
};

exports.getAllFavorites = (req, res) => {
  id = req.params.id;
  User.findById(id)
    .populate("favorites")
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.deleteFavorite = (req, res) => {
  id = req.params.id;
  yelpId = req.body.yelpId;
  User.findByIdAndUpdate(id, { $pull: { favorites: yelpId } })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

// exports.addFavorites = (req, res) => {
//     const id = req.body.id
//     const YelpId = req.body.YelpId
//     User.findByIdAndUpdate(id, {$addToSet: {"favorites": YelpId}})
//     // User.findByIdAndUpdate(id, {$push: {"favorites": YelpId}},
//     // {new: true}
//     // )
//     .then((data)=>{
//         res.send(data)
//     })
//     .catch(err=>{
//         res.send(err)
//     })
// }

exports.addFavorites = (req, res) => {
  //find user
  let YelpId = req.body.YelpId;
  let id = req.params.id;
  Cafe.findOne({ YelpId: YelpId }).then((cafe) => {
    res.send(cafe)
    
    User.findByIdAndUpdate(id, {$push: {favorites: {cafe}}})
    .then((user)=>{
        // user.favorites.push({cafe})
        user.save()
    })
    .catch(err=>{console.log('error here', err)})
})
}


//     User.findByIdAndUpdate(id, { $push: { 'favorites': { cafe } } })
//       .then((user) => {
//         user.save((err) => {
//           if (err) {
//             res.status(500);
//             console.log("there was an error");
//             return;
//           }

//           console.log("no error!");
//         });
//         // res.send(user)
//         // console.log('updated user:', user.populate('favorites'))
//       })
//       .catch((err) => {
//         res.send(err);
//         console.log("error here at the end");
//       });
//   });
// };
