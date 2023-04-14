//Including the express in the file using require
const express = require("express");

//Function which will work whole app
const app = express();
app.use(express.json());
app.use(myMiddleWare);

function myMiddleWare(req,res,next){
    console.log("Inside the Middle Wave");
    next();//It will pass on the control to the next step
}
//Stich the routes to the server
require("./routes/idea.routes")(app);

//Starting the server
app.listen(8828,()=>{
    console.log("Server Started");
})
//Express supports middle wave which means checking all the requirements before the major task is being performed.It has the capability of request object,response object and next

//Backend:Router,Controller,Model(Performs operations of the database)
