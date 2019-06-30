const express = require('express');

const app = express();

app.get('/', fubction(req, res){
    res.send("Answering to the call!!");
})

app.listen(3000, function(){
    console.log("listening to port 3000");
})