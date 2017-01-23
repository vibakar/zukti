let express = require('express');
let router = express.Router();
let keywordExtractor = require('keyword-extractor');
let extractInfoFromQuestion = require('../natural');
let getPossibleAnswer = require('./getPossibleAnswer');

router.post('/', function(req, res) {
    let possibleQuestionsAnswers = [];
    let question = req.body.question;
    // get info about question
    let questionInfo = extractInfoFromQuestion(question.value);
    let verbs = questionInfo.verbs;
    let keywords = questionInfo.keywords;
    let reactTerms = questionInfo.reactTerms;
    let resultCallback = function(result) {

        if(result.records.length==0){
          res.json({answer:'I will respond to your answer later'});
        }
        else{
          let answer=result.records[0]._fields[0].properties.textAnswer;
          res.json({answer:answer});
        }
        res.json({answer:'a',result:result});
    }
    if (reactTerms.length==0) {
      res.json({answer:'I am not able to understand you'});
    }
    getPossibleAnswer(keywords,reactTerms,verbs,resultCallback);
});

module.exports = router;
