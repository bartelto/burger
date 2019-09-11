orm = require("../config/orm.js");
mysql = require("mysql");

//
let burger = {
    all: function(cb) {
        orm.selectAll(cb);
    },
    create: function(cols, vals, cb) {

    },
    update: function() {

    }

}

module.exports = burger;