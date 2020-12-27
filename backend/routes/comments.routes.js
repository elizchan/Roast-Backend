const controller = require("../controllers/comments.controller") 

module.exports = function(app) {
app.get("/api/comments", controller.displayComments)
app.post("/api/comments", controller.addComment)
app.put("/api/comments", controller.editComments)
app.delete("/api/comments", controller.deleteComments)

}