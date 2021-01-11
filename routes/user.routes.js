const { authJwt } = require("../middlewares")
const controller = require("../controllers/user.controller")

module.exports = function(app) {
    app.use((req, res, next)=> {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-type, Accept"
        )
        next()
    })
    app.get("/api/test/all", controller.allAccess)
    app.get("/api/test/user", [authJwt.verifyWebToken], controller.userBoard)
    app.get("/api/test/admin", [authJwt.verifyWebToken, authJwt.isAdmin],
    controller.adminBoard)
    // app.put("/api/user/favorites/", controller.addFavorites)
    app.put("/api/user/favorites/:id/:cafeId", controller.addFavorites)
    app.get("/api/user/favorites/:id", controller.getAllFavorites)
    app.put("/api/user/favorites/delete/:id/:cafeId", controller.deleteFavorite)
    app.delete("/api/deleteCafes", controller.deleteCafes)

}

