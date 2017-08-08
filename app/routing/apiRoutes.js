var express = require('express');
var router = express.Router();

var newData = [];


router.get('/api/friends', function(req, res) {
  var dataFile = req.app.get('appData');
  res.json(dataFile);
  });

router.get("/api/new", function(req, res) {
  res.json(newData);
});

router.post("/api/new", function(req, res) {
  var newClient = req.app.get('newData');
  var myScore = newClient.scores;
  var total = 0;
  var bestMatch = 100;
  var index = -1;

  for(var j=0; j< appData.length; j++){
    //Iterate through the whole list of friends
    total = 0;

    for(var i =0; i< myScore.length; i++){
      //for each friend calculate the total value
      var dif = Math.abs(myScore[i] - appData[j].scores[i]);
      total += dif;
    }

    if(total < bestMatch){
      bestMatch = total;
      index = j;
    }

  }

  console.log('best Choice', buddy[index]);
  buddy.push(newClient);
  res.json(buddy[index]);
});


// router.get('/speakers/:speakerid', function(req, res) {
//   var dataFile = req.app.get('appData');
//   var speaker = dataFile.speakers[req.params.speakerid];
//   res.send(`
//       <link rel="stylesheet" type="text/css" href="/css/style.css">
//       <h1>${speaker.title}</h1>
//       <h2>with ${speaker.name}</h2>
//       <img src="/images/speakers/${speaker.shortname}_tn.jpg" alt="speaker">
//       <p>${speaker.summary}</p>
//       <script src="/reload/reload.js"></script>
//   `);
// });

module.exports = router;