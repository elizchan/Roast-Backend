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
  User.findById(id).populate("favorites").exec(function(err, data){
    res.send(data)
})
    // .then((data) => {
    //   res.send(data);
    // })
    // .catch((error) => {
    //   res.send(error);
    // });
};

exports.deleteFavorite = (req, res) => {
  id = req.params.id;
  cafeId = req.params.cafeId;
  User.findByIdAndUpdate(id, { $pull: { favorites: cafeId } }, {useFindAndModify:false})
    .then((data) => {
      res.send(data);
      data.save()
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
  let cafeId = req.params.cafeId;
  let id = req.params.id;
  Cafe.findById(cafeId).then((cafe) => {
    // let cafeId = cafe._id
    // console.log(cafeId)
    User.findByIdAndUpdate(id)
    .then((user)=>{
        user.favorites.addToSet([cafe._id]) 
        user.save(user)
        res.send(user)
    })
    .catch(err=>{console.log('error here', err)})
})
}


//     User.findByIdAndUpdate(id, { $push: { 'favorites': { cafe } } })

//         // res.send(user)
//         // console.log('updated user:', user.populate('favorites'))
//       })
//       .catch((err) => {
//         res.send(err);
//         console.log("error here at the end");
//       });
//   });
// };
exports.deleteCafes=(req,res)=>{
    Cafe.deleteMany({YelpId: "dc_wr_Dy6ZfHFbo3p5HcXg"}).then(data=>{res.send(data)})
}