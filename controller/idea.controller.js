const ideas = require("../models/idea.model");

//Searching all idea
exports.fetchAllIdeas=(req,res)=>{
    res.status(200).send(ideas)
}

let idCount = 1;
//Create new idea
exports.createIdea = (req,res)=>{
    const idea = req.body;
    idea.id = ++idCount;
    ideas(idCount)=idea;
    res.status(201).send(ideas(idCount))
}

//Update idea
exports.updateIdea=(req,res)=>{
    const ideaId =req.params.id;
    if(ideaId){
        ideas(ideaId)=res.body;
        res.status(200).send(ideas(ideaId))
    }
    else{
        res.status(400).send({
            message:'Id is not present'
        })
    }
}

//Delete the idea
exports.deleteIdea=(req,res)=>{
    if(ideas[req.params.id]){
        delete ideas[req.params.id];
        res.status(200).send({
            message:'Successfully Deleted'
        })
    }
    else{
        req.status(400).send({
            message:'Wrong Idea id'
        })
    }
}