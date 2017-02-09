var express = require('express');
var router = express.Router();
const UserBookmarks = require('../../models/userBookmarks');

router.get('/',function(req,res){
  let email = req.user.local.email||req.user.facebook.email||req.user.google.email;
  UserBookmarks.find({email:email},function(err,userBookmarks){
    if(err){
      res.status(500).send('Error in retriving saved bookmarks');
    }
    else{
      res.json(userBookmarks);
    }
  })
});

router.post('/', function(req, res, next) {
    let email = req.user.local.email || req.user.facebook.email || req.user.google.email;
    let question = req.body.question;
    let responseType = req.body.responseType;
    let savedResponse = req.body.savedResponse;
    let date = req.body.date;
    console.log(email);
    UserBookmarks.findOne({
        email: email
    }, function(err, userBookmarks) {
        if (!userBookmarks) {
            let bookmark =[{question:question,responseType:responseType,savedResponse:savedResponse,date:date}];
            var userBookmarks = new UserBookmarks();
            userBookmarks.email=email;
            userBookmarks.bookmarks=bookmark;
            userBookmarks.save(function(err, data) {
                console.log("saved")
                console.log(data)
            });
        } else {
            console.log(userBookmarks);
            let bookmark ={question:question,responseType:responseType,savedResponse:savedResponse,date:date};
            let bookmarks = userBookmarks.bookmarks;
            console.log(bookmarks);
            console.log(userBookmarks.email);
            bookmarks.unshift(bookmark);
            userBookmarks.bookmarks = bookmarks;
            userBookmarks.save(function(err){
              if(err){
                console.log(err);
              }
              else {
                console.log('saved');
              }
            })
        }
    });
});

router.delete('/:bookmarkId',function(req, res) {
    let email = req.user.local.email||req.user.facebook.email||req.user.google.email;
    UserBookmarks.update(
    {email: email},
    {
      $pull: {
        bookmarks: {
          _id: req.params.bookmarkId
        }
      }
    }, false,function(err){
      if(err){
        res.status(500).send('Error in deleting bookmark')
      }
      else{
        res.send('saved');
      }
    });
});

module.exports = router;
