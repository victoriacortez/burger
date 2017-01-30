var orm = require('./../config/orm.js');

var burger = {
	display: function() {
		orm.selectAll(function(error, results) {
		    if (error) throw error
		    return results;
		})
	},
}

module.exports = burger;