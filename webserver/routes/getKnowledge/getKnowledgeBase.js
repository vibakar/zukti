let express = require('express');
let router = express.Router();
let displayQuestionAnswerSet = require('./displayQA');

router.get('/',function(req,res)
{
  let resultCallback = function(questionanswerSet) {
      res.json({
          questionanswerSet:questionanswerSet
      });
  }
  displayQuestionAnswerSet(resultCallback);
});

module.exports = router;
