// Import MySQL connection.
var connection = require("../config/connection.js");

let orm =  {
    selectAll: function(table, cb) {
        let queryString = "SELECT * FROM ??;";
        connection.query(queryString, table, function(err, result){
            if (err) {
                throw err;
            }
            cb(result); // execute callback function
        });
    },
    insertOne: function(table, col, val, cb) {
        let queryString = "INSERT INTO ?? (??) VALUES (?);";
        connection.query(queryString, [ table, col, val ], function(err, result){
            if (err) {
                throw err;
            }
            cb(result); // execute callback function
        });
    },
    updateOne: function(table, col, val, condition, cb) {
        // condition is a string, such as "id=7"
        let queryString = `UPDATE ?? SET ??=? WHERE ${condition};`;
        connection.query(queryString, [ table, col, val ], function(err, result){
            if (err) {
                throw err;
            }
            cb(result); // execute callback function
        });
    }
}

module.exports = orm;