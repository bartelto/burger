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
    insertOne: function(table, cols, vals, cb) {
        let queryString = "INSERT INTO ?? (??) VALUES (?);";
        connection.query(queryString, val, function(err, result){
            if (err) {
                throw err;
            }
            cb(result); // execute callback function
        });
    },
    updateOne: function(table, val) {
        let queryString = "UPDATE ?? SET ??=? WHERE ??=?;";
        connection.query(queryString, val, function(err, result){
            if (err) {
                throw err;
            }
            cb(result); // execute callback function
        });
    }
}

module.exports = orm;