const express = require("express");
const app = express();
const ParseServer = require("parse-server").ParseServer;

const api = new ParseServer({
    databaseURI: 'mongodb+srv://Tanmay:Tanmay@cluster0.gh5v6.mongodb.net/demo1?retryWrites=true&w=majority',
    appId: 'myAppId',
    masterKey: 'myMatserKey',
    serverURL: 'http://localhost:3000/parse'
});

app.use("/parse",api);

app.get("/",(req,res)=>{
    res.send("this is pipeline demo");
});
app.get("/post",(req,res)=>{
    const GameScore = Parse.Object.extend("GameScore");
    const gameScore = new GameScore();
    
    gameScore.set("score", 3000);
    gameScore.set("playerName", "Tanmay Fuse");
    gameScore.set("cheatMode", true);
    
    gameScore.save()
    .then((gameScore) => {
      // Execute any logic that should take place after the object is saved.
      console.log('New object created with objectId: ' + gameScore.id);
    }, (error) => {
      // Execute any logic that should take place if the save fails.
      // error is a Parse.Error with an error code and message.
      console.log('Failed to create new object, with error code: ' + error.message);
    });
    res.send("post");
});

app.listen(3000,()=>{
    console.log("listening on 3000");
})