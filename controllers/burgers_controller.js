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
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end(); // successfully updated record
        }
    });
});

module.exports = router;