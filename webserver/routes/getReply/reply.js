let express = require('express');
let router = express.Router();
let processQuestion = require('./functions/processQuestion');
// let getKeywordResponse = require('./getKeywordResponse');
let getQuestionResponse = require('./functions/getQuestionResponse');
// let saveUnansweredQuery = require('./saveUnansweredQuery');
router.get('/askQuestion', function(req, res) {
    let question = req.query.question;
    let query = processQuestion(question);
    let keywords = query.keywords;
    let intents = query.intents;
    let questionResultCallback = function(result) {
        res.send(result);
    }
    if (keywords.length === 0) {
        res.send('No keywords found');
    } else if (intents.length === 0) {
        // getKeywordResponse(resultCallback);
        // saveUnansweredQuery();
    } else {
        getQuestionResponse(intents, keywords, questionResultCallback);
    }
})


module.exports = router;
