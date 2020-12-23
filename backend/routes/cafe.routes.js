const controller = require("../controllers/cafe.controller") //change to cafe controller

module.exports = function(app) {
    app.get("/api/cafe/all", controller.displayCafes)
    app.post("api/cafe/", controller.addCafe)
}