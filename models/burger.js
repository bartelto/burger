orm = require("../config/orm.js");
mysql = require("mysql");
    
let burger = {
    all: function(cb) {
        orm.selectAll("burgers", cb);
    },
    create: function(col, val, cb) {
        orm.insertOne("burgers", col, val, cb);
    },
    update: function(col, val, condition, cb) {
        orm.updateOne("burgers", col, val, condition, cb);
    }
}

module.exports = burger;