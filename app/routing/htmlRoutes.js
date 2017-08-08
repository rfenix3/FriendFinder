var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
	// make the appData file available for this route and assign it to a variable.
	var data = req.app.get('appData');
	var pagePhotos = [];
	data.friends.forEach(function(item){
		pagePhotos = pagePhotos.concat(item.photo);
	});
	// setting up ejs file(index.ejs) using 'render' method so that it will be accessible from this route(index.js) file.
	// res.render('home', {
	// 	pageTitle: 'Home',
	// 	artwork: pagePhotos,
	// 	pageID: 'home'
	// });
		 res.render('home');

  // res.send(`
  //     <link rel="stylesheet" type="text/css" href="css/style.css">
  //     <h1>Welcome to Roux Meetups</h1>
  //     <img src="/images/misc/background.jpg" alt="background" style="height: 300px;">
  //     <p>Roux Academy Meetups put together artists from all walks of life</p>
  //     <script src="/reload/reload.js"></script>
  // `);
});

router.get('/survey', function(req, res) {
	var info = '';
  	var dataFile = req.app.get('appData');
  	dataFile.friends.forEach(function(item) {
    // info += `
    // <li>
    //   <h2>${item.name}</h2>
    //   <img src="/images/${item.photo}" alt="friend">
    // </li>
    // `;
  	});
	res.render('survey');
  //  res.send(`
  //   <link rel="stylesheet" type="text/css" href="/css/style.css">
  //     <h1>Roux Academy Meetups</h1>
  //     ${info}
  //     <script src="/reload/reload.js"></script>
  // `);
});

module.exports = router;