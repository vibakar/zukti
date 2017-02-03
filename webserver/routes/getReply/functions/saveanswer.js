var express=require('express');
var router=express.Router();
let AnsweredQuery = require('../../../models/savedqueries');
//let RegisteredUser = require('../models/tempUserModel');
router.post('/answeredquery', function(req, res, next) {
  console.log("i am reaching to save queries");
  console.log(req.body);
   AnsweredQuery.find({ email: req.body.email }, function (err, docs) {
  if(docs.length===0)
  {
    var dataToSave = new AnsweredQuery(req.body);
    dataToSave.save(function(err,data){
      console.log("saved")
      console.log(data)
    })
  }
  else {
    console.log("found it...!!");
    console.log(docs[0].savedquery)
    console.log(req.body.savedquery)
    let newQueries=new Array(docs[0].savedquery)
    newQueries[0].push(req.body.savedquery)
console.log(newQueries[0]);
AnsweredQuery.findOneAndUpdate({ email: req.body.email }, { savedquery: newQueries[0] },function(err){
  if(err)
  {
    console.log("error while updating")
  }
  else {
    console.log("successfully updated")
  }
})
  }
});
})
router.post('/viewanswer', function(req, res) {
  AnsweredQuery.find({ email: req.body.email }, function (err,alldetails) {
        if (err) {
            res.send(err);
            console.log('error ocuured');
        } else {
            res.send(alldetails);
        }
    });
});
router.delete('/deleteanswer', function(req, res) {
  console.log(req.body.id);
  console.log(req.body.email);
  AnsweredQuery.find({email:req.body.email}),function(err,details)
  {
    console.log("jii");
    if (err) {
        res.send(err);
        console.log('error ocuured');
    } else {
      console.log(details);
      };
    }

});
module.exports = router;
