Promise = require('bluebird');
mysql = require('mysql');
DBF = require('../dbf-setup.js');

var express=require('express'),
app = express(),
port = process.env.PORT || 1337;

//var buttons= function(){ //Returns a promise that can take a handler ready to process the results.
var sql = "select * from forever_alone.till_buttons;";
var result = DBF.query(mysql.format(sql));



result.then(function(dbfs,err){

    // Creates an array that holds the data

    var bts = new Array(dbfs.length);
    dbfs.forEach(function (item, index) {

        // Returns the results of the query in an array with the let_pos as left as "left" is a command in the DB.

        bts[index] = {
            "buttonID": item.buttonID,
            "left": item.left_pos,
            "top": item.top,
            "width": item.width,
            "label": item.label,
            "invID": item.invID
            };
        })

app.use(express.static(__dirname + '/public')); //Serves the web pages
app.get("/buttons",function(req,res){ // handles the /buttons API
    res.send(bts)
});

app.listen(port);

});


