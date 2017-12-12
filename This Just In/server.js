var express = require('express');
var cheerio = require('cheerio');
var request = require('request');
var sentiment = require('sentiment');
var fs = require('fs');
var port = 2046;
var app = express();

app.use(express.static('public'));
app.get("/api", function(req, res){

var url = 'http://sana.sy/en/';
request(url, function(err, resp, body) {
  var $ = cheerio.load(body);
  var title = $('.featured-title');
  var til = [];
  var myObject = {};
  myObject.sana1 = [];
  for (var i = 0; i < title.length; i++){
    myObject.sana1.push(title[i].children[3].children[0].children[0].data);
    fs.writeFile("sana.json", titleString, function(err) {
    });
  }
   var titleString = JSON.stringify(myObject);
   var r = sentiment(titleString);
      console.log(r);
      if(sentiment(titleString).score>=5){
        var p = sentiment(titleString).positive;
        res.send("Syrian's SANA is feeling great" + " because it's thinking about: " + p);
        
      }else if(sentiment(titleString).score<=4 && sentiment(titleString).score>=2){
        var p = sentiment(titleString).positive;
        res.send("Syrian's SANA is feeling good" + " because it's thinking about: " + p);
      }else if(sentiment(titleString).score<=1 && sentiment(titleString).score>= -1){
        res.send("Syrian's SANA is feeling neutral");
      }else if(sentiment(titleString).score<=-2 && sentiment(titleString).score>= -4){
        var s = sentiment(titleString).negative;
        res.send("Syrian's SANA is feeling bad" + " because it's thinking about: " + s);
      }else if(sentiment(titleString).score<= -5){
        var s = sentiment(titleString).negative;
        res.send("Syrian's SANA is feeling awful" + " because it's thinking about: " + s);
      }

});
});

// fs.readFile('sana.json', 'utf8', function readFileCallback(err, data){
//     if (err){
//       console.log(err);
//     } else {
//       var r = sentiment(data);
//       console.log(r);
//       }if(sentiment(data).score>=5){
//         console.log("sana is feeling great");
//       }else if(sentiment(data).score<=4 && sentiment(data).score>=2){
//         console.log("sana is feeling good");
//       }else if(sentiment(data).score<=1 && sentiment(data).score>= -1){
//         console.log("sana is feeling neutral");
//       }else if(sentiment(data).score<=-2 && sentiment(data).score>= -4){
//         console.log("sana is feeling bad");
//       }else if(sentiment(data).score<= -5){
//         console.log("sana is feeling awful");
//       }
// });

//---------------------------------------------------------------------------------------------------------------------------------------
app.get("/api1", function(req, res){
  var url2= 'https://www.thenational.ae/';

  request(url2, function(err, resp, body) {
  var $ = cheerio.load(body);
  var til = [];
  var myObject1 = {};
  myObject1.uae1 = [];

  var titlez = $('.news-heading-h3');

  for (var i = 0; i < titlez.length; i++){
    console.log(titlez[i].children[0].data);
    myObject1.uae1.push(titlez[i].children[0].data);
    fs.writeFile("uae.json", titleString, function(err) {
  });
  }
    var titleString = JSON.stringify(myObject1);
    var r = sentiment(titleString);
      console.log(r);
      if(sentiment(titleString).score>=5){
        var p = sentiment(titleString).positive;
        res.send("UAE's The National is feeling great" + " because it's thinking about: " + p);
      }else if(sentiment(titleString).score<=4 && sentiment(titleString).score>=2){
        var p = sentiment(titleString).positive;
        res.send("UAE's The National is feeling good" + " because it's thinking about: " + p);
      }else if(sentiment(titleString).score<=1 && sentiment(titleString).score>= -1){
        res.send("UAE's The National is feeling neutral");
      }else if(sentiment(titleString).score<=-2 && sentiment(titleString).score>= -4){
        var s = sentiment(titleString).negative;
        res.send("UAE's The National is feeling bad" + " because it's thinking about: " + s);
      }else if(sentiment(titleString).score<= -5){
        var s = sentiment(titleString).negative;
        res.send("UAE's The National is feeling awful" + " because it's thinking about: " + s);
      }
//     fs.readFile('uae.json', 'utf8', function readFileCallback(err, data){
//     if (err){
//       console.log(err);
//     } else {
//       var r1 = sentiment(data);
//       console.log(r1);
//     }
// });
});
});

//---------------------------------------------------------------------------------------------------------------------------------------

app.get("/api2", function(req, res){
  var url3= 'http://timesofoman.com/';

  request(url3, function(err, resp, body) {
  var $ = cheerio.load(body);
  var til = [];
  var myObject2 = {};
  myObject2.oman2 = [];

  var titleo = $('.L6white-bold');
  for (var i = 0; i < titleo.length; i++){
    console.log(titleo[i].children[0].data);
    myObject2.oman2.push(titleo[i].children[0].data);


    fs.writeFile("oman.json", titleString, function(err) {
  });
  }
    var titleString = JSON.stringify(myObject2);


  
var r = sentiment(titleString);
      console.log(r);
      if(sentiment(titleString).score>=5){
        var p = sentiment(titleString).positive;
        res.send("Oman's Times of Oman is feeling great" + " because it's thinking about: " + p);
      }else if(sentiment(titleString).score<=4 && sentiment(titleString).score>=2){
        var p = sentiment(titleString).positive;
        res.send("Oman's Times of Oman is feeling good" + " because it's thinking about: " + p);
      }else if(sentiment(titleString).score<=1 && sentiment(titleString).score>= -1){
        res.send("Oman's Times of Oman is feeling neutral");
      }else if(sentiment(titleString).score<=-2 && sentiment(titleString).score>= -4){
        var s = sentiment(titleString).negative;
        res.send("Oman's Times of Oman is feeling bad" + " because it's thinking about: " + s);
      }else if(sentiment(titleString).score<= -5){
        var s = sentiment(titleString).negative;
        res.send("Oman's Times of Oman is feeling awful" + " because it's thinking about: " + s);
      }
});
});
//---------------------------------------------------------------------------------------------------------------------------------------

app.listen(port, function(){
  console.log('listening on', port);
});

