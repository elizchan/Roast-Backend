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


exports.addFavorites = (req, res) => {
    //find user
    let cafeId = req.params.cafeId;
    let id = req.params.id;
      User.findByIdAndUpdate(id, {useFindAndModify: false})
      .then((user)=>{
        user.favorites.addToSet([cafeId])
        user.save(user)
        res.send(user)
      })
      .catch(err=>{console.log(err)})
}

