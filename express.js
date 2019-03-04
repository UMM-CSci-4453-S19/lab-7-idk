var express = require('express');
app = express(),
    port = process.env.PORT || 1337;

//var app = angular.module('MyTutorialApp',[]);

app.use(express.static(__dirname + '/public'));
app.listen(port);

