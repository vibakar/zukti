let express = require('express');
let router =express.Router();
let addNewCategoryToNeo = require('./functions/addNewCategoryToNeo');
let retriveQuestionsCategory = require('./functions/retriveQuestionsCategory');
router.post('/questionCategory',function(req,res){
  let successCB=function(nodeInfo){
    res.json(nodeInfo);
  };
  let failureCB=function(){
    res.json({created:false});
  }
  addNewCategoryToNeo(req.body.category,successCB,failureCB);
});
router.get('/questionCategory',function(req,res){
  let successCB=function(categories){
    res.json(categories);
  }
  let failureCB=function(){
    res.json({error:true});
  };
  retriveQuestionsCategory(successCB,failureCB);
});

module.exports = router;
