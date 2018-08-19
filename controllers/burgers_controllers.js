
var express = require('express');
var router = express.Router();
var burger = require('../models/burgers.js');

//to get records
router.get('/', function (req, res) {
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render('index',{burger_data});
    });
   
  });


//for creating a new record
  router.post('/', function(req, res){
    burger.create("burgers", req.body.burger_name,function(dbBurger) {
        console.log(dbBurger);
        res.redirect('/');
      });
});

//for updating a record
 router.put('/burgers/update', function(req,res){
    burger.update(req.body.id, function(result){
      console.log(result);
      res.redirect('/');
    });
   });
   
   module.exports = router;


