let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let User = require('../../models/tempUserModel');


router.get('/',function(req,res){
    User.find(function(err,user){
      if (err)
      {res.send(err)}
      else {
        res.json(user);
      }
    });
});

module.exports = router;
