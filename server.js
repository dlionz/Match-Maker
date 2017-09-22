//npm packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//server
var app = express();
var PORT = "3000";


app.get('/', function (req, res) {
  res.send(home.html);
})

app.listen(PORT, function(){
  console.log("listening on port: " + PORT);
})
