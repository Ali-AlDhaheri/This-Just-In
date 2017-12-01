var express = require('express');
var cheerio = require('cheerio');
var request = require('request');
var sentiment = require('sentiment');
var fs = require('fs');
var port = 2046;
var app = express();

var url = 'http://sana.sy/en/';
request(url, function(err, resp, body) {
  var $ = cheerio.load(body);

  var title = $('.featured-title');
  
  var til = [];

  for (var i = 0; i < title.length; i++){
  	console.log(title[i].children[3].children[0].children[0].data);

    til.push(title[i].children[3].children[0].children[0].data);


    var titleString = JSON.stringify(til);

    fs.writeFile("sana.json", titleString, function(err) {
    console.log('complete');
    });
  }
  // var jsonContents = require("./sana.json");
  // var jsonContentz = JSON.parse(jsonContents);
  // var r1 = sentiment(jsonContentz);
  // console.log(r1);


});


app.listen(port, function(){
  console.log('listening on', port);
});