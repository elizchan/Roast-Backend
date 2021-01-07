const controller = require("../controllers/comments.controller") 

module.exports = function(app) {
app.get("/api/comments/:id", controller.displayComments)
app.post("/api/comments", controller.addComment)
app.put("/api/comments/:id", controller.editComments)
app.delete("/api/comments/:id", controller.deleteComments)

}