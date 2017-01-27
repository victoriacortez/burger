var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hello",
  database: "burgers"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);

});

app.get("/", function(req, res) {

    connection.query("SELECT * FROM burgers;", function(err, data) {
      if (err) throw err;

       console.log('The solution is: ', data);

    
       res.send(data);

      res.render("index", { burgers: data });
    });
});