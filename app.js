const express = require('express');
const debug = require('debug')('app');
// set DEBUG=* & node app.js
const chalk = require('chalk');

const app = express();

app.get('/', function(req, res){
    res.send("Answering to the call!!");
})

app.listen(3000, function(){
    debug(`listening to port ${chalk.green(3000)}`);
})