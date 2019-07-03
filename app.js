const express = require('express');
const debug = require('debug')('app');
// set DEBUG=* & node app.js
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('combined')); // anche 'tiny'
app.use(express.static(path.join(__dirname,'/public')))
app.get('/', function(req, res){
    // __dirname = location dell'eseguibile attuale
    // path.join per creare il percorso per il file
    res.sendFile(path.join(__dirname, 'views/index.html'));
})

app.listen(3000, function(){
    debug(`listening to port ${chalk.green(3000)}`);
})