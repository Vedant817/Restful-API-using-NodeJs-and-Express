const ideaController = require("../controller/idea.controller")
//Define the route for the calls like:GET 172.31.123.36:8828/ideaApp/v1/ideas

module.exports=(app)=>{
    app.get("/ideaApp/v1/ideas",ideaController.fetchAllIdeas)
    app.post("/ideaApp/v1/idea",ideaController.createIdea)
    app.put("/ideaApp/v1/idea/:id",ideaController.updateIdea)
    app.delete("/ideaApp/v1/idea/:id",ideaController.deleteIdea)
}