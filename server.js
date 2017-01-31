var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded ({ extended:true }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// This pulls the routes from burgers_controller.js. All node routes are handled on this file.
// app is being passed in because app is not defined in burgers_controller.js
// this allows me to use app.get & app.post in that file
require('./controllers/burgers_controller.js')(app);


app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});