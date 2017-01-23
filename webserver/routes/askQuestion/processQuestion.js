let express = require('express');
let router = express.Router();
let extractInfoFromQuestion = require('../natural');
let getPossibleAnswer = require('./getPossibleAnswer');

router.post('/', function(req, res) {
    let question = req.body.question;
    // get info about question
    let questionInfo = extractInfoFromQuestion(question.value);
    let verbs = questionInfo.verbs;
    let reactTerms = questionInfo.reactTerms;
    let resultNotFoundCallback = function(noInfo) {
        if(noInfo){
          res.json({
            answer: "Sorry I didn't found and answer I ll notify u soon"
          });
        }
        else{
          res.json({
            answer: "Here is what i have for you",
            keywords:reactTerms
          });
        }
    };
    let resultFoundCallback = function(finalResult) {
        res.json({
            answer: finalResult.textAnswer,
            result: finalResult.otherResult
        });
    };
    if (reactTerms.length === 0) {
        res.json({
            answer: 'I am not able to understand you'
        });
    }
    else{
      getPossibleAnswer(question, reactTerms, verbs, resultFoundCallback, resultNotFoundCallback);
    }
});

module.exports = router;
