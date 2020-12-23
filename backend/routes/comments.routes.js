const controller = require("../controllers/comments.controller") 

module.exports = function(app) {
    app.get("/api/comments/all", controller.displayComments)
    app.post("/api/comments/:id", controller.addComment)
    app.put("/api/comments/:id", controller.editComment)
    app.delete("/api/comments/:id", controller.deleteComment)

}