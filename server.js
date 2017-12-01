

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

  for (var i = 0; i < title.length; i++){
  	console.log(title[i].children[3].children[0].children[0].data);
  }
  var more = $('.cat-box-content')
  for (var i = 0; i < more.length; i++){
  	console.log(more[i]);
  }
  titleText = title.text().replace(/\t/g, '');

  var titleString = JSON.stringify(titleText);
  fs.writeFile("sana.json", titleString);

});


app.listen(port, function(){
  console.log('listening on', port);
});