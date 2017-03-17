'use strict';

var express = require('express'), 
    bodyParser = require('body-parser');

module.exports = function () {
    var app = express();
    app.set('view engine', 'pug');
    app.use('/libs', express.static('./node_modules'));
    app.use(express.static("public"));

    
    //app.use('/static', express.static('./public'));

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
     
    return app;
};
