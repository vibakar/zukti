let express = require('express');
let router = express.Router();
let processQuestion = require('./functions/processQuestion');
let getQuestionResponse = require('./functions/getQuestionResponse');
let commonReply = require('./../../config/commonReply');
let answerNotFoundReply = require('./../../config/answerNotFoundReply');
let saveUnansweredQuery = require('./functions/saveUnansweredQuery');
let saveUserQueries = require('./functions/saveUserQueries');
let saveAnalyticsData = require('./functions/saveAnalyticsData');
let getKeywordResponse = require('./functions/getKeywordResponse');

router.post('/askQuestion', function(req, res) {
    console.log(req.user);
    let email = req.user.local.email || req.user.facebook.email || req.user.google.email;
    let username = req.body.username;
    let question = req.body.question;
    let query = processQuestion(question.value.toLowerCase());
    let keywords = query.keywords;
    let intents = query.intents;
    let sendResponse = function(isUnAnswered, answerObj) {
        saveAnalyticsData(isUnAnswered);
        saveUserQueries(email, isUnAnswered, question, answerObj);
        res.json({isUnAnswered: isUnAnswered, answerObj: answerObj});
    }
    let answerFoundCallback = function(answerObj) {
        sendResponse(false, answerObj);
    };
    let noAnswerFoundCallback = function() {
        console.log('No answer found');
        saveUnansweredQuery(username, email, question.value, keywords, intents);
        let foundNoAnswer = answerNotFoundReply[Math.floor(Math.random() * answerNotFoundReply.length)];
        let resultArray = [];
        let resultObj = {};
        resultObj.value = foundNoAnswer;
        resultArray.push(resultObj);
        sendResponse(true, resultArray);
    };
    if (keywords.length === 0) {
        saveUnansweredQuery(username, email, question.value);
        let foundNoAnswer = commonReply[Math.floor(Math.random() * commonReply.length)]
        let resultArray = [];
        let resultObj = {};
        resultObj.value = foundNoAnswer;
        resultArray.push(resultObj);
        sendResponse(true, resultArray);
    } else if (intents.length === 0) {
        saveUnansweredQuery(username, email, question.value);
        getKeywordResponse(keywords, sendResponse);
    } else {
        getQuestionResponse(intents, keywords, answerFoundCallback, noAnswerFoundCallback);
    }
});

module.exports = router;
