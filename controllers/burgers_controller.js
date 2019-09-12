let express = require("express");
let router = express.Router();

let burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.all(function(data) {
        res.render("index", { burgers: data }); // renders burger data using index.handlebars
    });
});

router.post("/api/burgers", function(req, res){
    burger.create("burger_name", req.body.name, function(result) {
        res.redirect('back'); // reload the page that made the request
    } )
});

router.put("/api/burgers/:id", function(req, res){
    burger.update("devoured", true, `id=${req.params.id}`, function(result) {
        res.redirect('back'); // reload the page that made the request
    });
});

module.exports = router;