
var express = require('express');
var reload = require('reload');
var app = express();
var dataFile = require('./app/data/friends.json');

app.set('port', process.env.PORT || 3000 );
app.set('appData', dataFile);
// setting up ejs file so that it will be accessible to other .js files.
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Roux Meetups';

// express.static is a middleware that lets you get other types of files (images, css, etc) so that our routes will have access to them.
// app/public now becomes the root that is accessible to the main application.
app.use(express.static('./app/public'));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// app.use below lets the routers be available to this main application
app.use(require('./app/routing/apiRoutes'));
app.use(require('./app/routing/htmlRoutes'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});


// Upgrading to version 2
// Reload dropped support for server. The only required parameter for reload is app.
// Upgrade with required arguments: reload(server, app) becomes reload(app)
//reload(server, app);

reload(app);



