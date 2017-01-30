let express = require('express');
let router = express.Router();
let processQuestion = require('./functions/processQuestion');
// let getKeywordResponse = require('./getKeywordResponse');
let getQuestionResponse = require('./functions/getQuestionResponse');
// let saveUnansweredQuery = require('./saveUnansweredQuery');
router.post('/askQuestion', function(req, res) {
    let question = req.body.question;
    let query = processQuestion(question.value.toLowerCase());
    let keywords = query.keywords;
    let intents = query.intents;
    let questionResultCallback = function(finalResult) {
        res.json({
            answer: finalResult.textAnswer,
            result: finalResult.otherResult
        });
    }
    let noAnswerFoundCallback = function() {
        res.json({
            answer: "Here is what i have for you",
            keywords: keywords
        });
    }
    if (keywords.length === 0) {
        res.json({
            answer: 'I am not able to understand you'
        });
    } else {
        getQuestionResponse(intents, keywords, questionResultCallback, noAnswerFoundCallback);
    }
});

module.exports = router;
