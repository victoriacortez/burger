var burger = require('./../models/burger.js');

module.exports = function(app){
	app.get('/', function(req,res){
		burger.display(req,res);
	})
}