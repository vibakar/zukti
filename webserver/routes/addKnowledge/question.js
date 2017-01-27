let express = require('express');
let SaveAnswer = require('./saveAnswer');
let AddQABlock = require('./addQASet');
let addQuestion = require('./addQuestion');
let router = express.Router();
// add a question to the database
router.post('/addQuestion', function(req, res) {
    let question = req.body.question;
    // will hold set under category of question
    let questionsAnswerSetID = req.body.questionsAnswerSetID;
    // will code cateogry of question
    let questionsCategoryID = req.body.questionsCategoryID;
    //let words=[];
    // extract the main words from the sentence
    addQuestion(res, questionsCategoryID, questionsAnswerSetID, question, function(response) {
        console.log('Inside resultCallback');
        res.send(response);
    });
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
    let questionsAnswerSetID = req.body.id;
    let answer = req.body.answer;
    let type = req.body.type;
    // callback to be called when answer is saved to the neo4j database
    let successCB = function() {
        res.json({
            saved: true
        });
    }
    let failureCB = function() {
        res.json({
            saved: false
        })
    }
    // function call to save answer to it questionsAnswerSetID
    SaveAnswer(questionsAnswerSetID, answer, type, successCB, failureCB);
});


module.exports = router;
