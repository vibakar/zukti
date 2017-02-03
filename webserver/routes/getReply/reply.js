let express = require('express');
let router = express.Router();
let processQuestion = require('./functions/processQuestion');
let getQuestionResponse = require('./functions/getQuestionResponse');
let commonReply = require('./../../config/commonReply');
let answerNotFoundReply = require('./../../config/answerNotFoundReply');
let saveUnansweredQuery = require('./functions/saveUnansweredQuery');

router.post('/askQuestion', function(req, res) {
    let question = req.body.question;
    let query = processQuestion(question.value.toLowerCase());
    let keywords = query.keywords;
    let intents = query.intents;
    console.log(keywords);
    let answerFoundCallback = function(resultArray) {
        res.json({
            resultArray
        });
    };
    let noAnswerFoundCallback = function() {
        saveUnansweredQuery('v', question.value, keywords, intents);
        res.json({
            foundNoAnswer: answerNotFoundReply[Math.floor(Math.random() * answerNotFoundReply.length)],
        });
    };
    if (keywords.length === 0) {
        saveUnansweredQuery('v', question.value);
        res.json({
            foundNoAnswer: commonReply[Math.floor(Math.random() * commonReply.length)]
        });
    } else {
        getQuestionResponse(intents, keywords, answerFoundCallback, noAnswerFoundCallback);
    }
});

module.exports = router;
