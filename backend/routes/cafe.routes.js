const controller = require("../controllers/cafe.controller") //change to cafe controller

module.exports = function(app) {
    app.post("/api/cafe/all", controller.addCafe)
    app.post("/api/yelp", controller.addYelpId)
}

// module.exports = function(app) {
//     app.get("/api/cafe/all", controller.allCafes)
// }