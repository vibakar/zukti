let express = require('express');
let router = express.Router();
let processQuestion = require('./functions/processQuestion');
let getQuestionResponse = require('./functions/getQuestionResponse');
let commonReply = require('./../../config/commonReply');
let answerFoundReply = require('./../../config/answerFoundReply');
let saveUnansweredQuery = require('./functions/saveUnansweredQuery');

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
    };
    let noAnswerFoundCallback = function() {
        saveUnansweredQuery('v', question.value, keywords, intents);
        res.json({
            answer: answerFoundReply[Math.floor(Math.random() * answerFoundReply.length)],
            keywords: keywords
        });
    };
    if (keywords.length === 0) {
        saveUnansweredQuery('v', question.value);
        res.json({
            answer: commonReply[Math.floor(Math.random() * commonReply.length)]
        });
    } else {
        getQuestionResponse(intents, keywords, questionResultCallback, noAnswerFoundCallback);
    }
});

module.exports = router;
