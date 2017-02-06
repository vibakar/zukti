let express = require('express');
let router = express.Router();
let displayQuestionAnswerSet = require('./displayQA');

router.get('/',function(req,res)
{
  let resultCallback = function(questionSet,answerSet) {
      res.json({
          questionSet:questionSet,answerSet:answerSet
      });
  }
  displayQuestionAnswerSet(resultCallback);
});

module.exports = router;
