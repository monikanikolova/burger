var express = require("express");

var router = express.Router();

//Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.post("/api/burgers", (req, res) => {
  console.log('test')
  burger.insertOne(["burger_name", "devoured"
], [
    req.body.burger_name, false
  ], () => {
    res.redirect("/");
  });
});
//Create all routes 
router.get("/", (req, res) => {
  burger.selectAll((data) => {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});
router.post('/api/burgers/:id', function(req, res) {
  var condition = `id = ${req.params.id}`;

  burger.updateOne({
    devoured: true
  }, condition, (result) => {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } 
      res.redirect("/");
  });
});

//Export routes for server.js to use.
module.exports = router;