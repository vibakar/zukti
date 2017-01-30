let express = require('express');
let AddQABlock = require('./addQuestionAnswerSet');
let processQuestion = require('./processQuestion');
let addIntentQuestion = require('./addIntentQuestion');
let saveAnswerToDB = require('./saveAnswerToDB');
let router = express.Router();
// add a question to the database
router.post('/addQuestion', function(req, res) {
    let question = req.body.question;
    console.log(question);
    let answerID = req.body.answerID;
    let questionInfo = processQuestion(question);
    let resultCallback = function(id) {
        res.json({
            id: id
        });
    }
    addIntentQuestion(answerID, question, questionInfo.keywords, questionInfo.intents, resultCallback);

});

// router to add a question answer set to Ginni knowledge base
router.post('/addQuestionAnswerSet', function(req, res) {

    // callback when a new question answet set will be created
    let questionsAnswerSetCreatedCallback = function(id) {
        // unique id given to each questionsAnswerSet
        res.json({
            id: id
        });
    }
    AddQABlock(questionsAnswerSetCreatedCallback);
});

// route to add answer to a given question answer set
router.post('/addAnswer', function(req, res) {
    let answerID = req.body.answerID;
    let answer = req.body.answer;
    let type = req.body.type;
    // callback to be called when answer is saved to the neo4j database
    let resultCallback = function(result) {
        res.json({
            saved: true
        });
    }
    saveAnswerToDB(answerID,answer,type,resultCallback)
    // function call to save answer to it answerID
});


module.exports = router;
