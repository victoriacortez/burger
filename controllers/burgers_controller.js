var burger = require('./../models/burger.js');

module.exports = function(app){
	app.get('/', function(req,res){
		var results = burger.display();
		console.log(results);
		res.json(results);
	})
}