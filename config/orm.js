var connection = require('./connections.js');
// Now I set a console log so I know that the file was connected
console.log('orm.js connected');

var orm = {
	selectAll: function(callback) {
		connection.query('SELECT * FROM `burgers`', callback)
	},

	insertOne: function(burger) {
		connection.query('INSERT INTO burgers (burger_name) VALUES (?)', burger, function(error, results) {
		    if (error) throw error
		    console.log(results);
		})
	},

	updateOne: function(id) {
		connection.query('UPDATE burgers SET devoured = 1 WHERE id = ?', id, function(error, results) {
		    if (error) throw error
		    console.log(results);
		})
	}
}

module.exports = orm;