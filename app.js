const express = require('express');
const chalk = require('chalk');

const app = express();

app.get('/', function(req, res){
    res.send("Answering to the call!!");
})

app.listen(3000, function(){
    console.log(`listening to port ${chalk.green(3000)}`);
})