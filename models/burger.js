var orm = require('./../config/orm.js');

var burger = {
	display: function(req,res) {
		orm.selectAll(function(error, results) {
		    if (error) throw error
		    res.render('index', {
		    	burgers: results
		    });
		})
	},
}

module.exports = burger;