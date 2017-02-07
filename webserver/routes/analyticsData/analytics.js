const GinniAnalytics = require('../../models/ginniAnalytics');
let express = require('express');
let router = express.Router();
router.get('/', function(req, res) {
  GinniAnalytics.findOne({},function(err,data){
    if(err){
      console.log(err);
    }
    else{
      if(data){
        res.json({'queryCount':data.queriesAsked})
      }
      else{
        res.json({'queryCount':0})
      }
    }
  })
});


module.exports = router;
