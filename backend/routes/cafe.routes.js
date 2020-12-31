const controller = require("../controllers/cafe.controller") //change to cafe controller

module.exports = function(app) {
    app.post("/api/cafe", controller.addCafe)
}

module.exports = function(app) {
    app.get("/api/cafe", controller.allCafes)
}