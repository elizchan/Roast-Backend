const controller = require("../controllers/cafe.controller") //change to cafe controller

module.exports = function(app) {
    app.post("/api/cafe", controller.addCafe)
    app.get("/api/cafe", controller.allCafes)
}