let express = require('express');
let saveQuestionAnswer = require('./saveQuestionAnswer');
let processQuestion = require('./processQuestion');
let router = express.Router();

router.post('/verifyQuestion', function(req, res) {
    let question = req.body.question;
    let questionInfo = processQuestion(question);
    if (questionInfo.keywords.length === 0) {
        res.json({
            isValidQuestion: false,
            errorMessage:'The question must have a keyword'
        });
    }
    else if (questionInfo.intents.length === 0) {
        res.json({
            isValidQuestion:false,
            errorMessage:'The question must have an intent'
        });
      }
    else{
      res.json({isValidQuestion:true});
    }
});
// router to add a question answer set to Ginni knowledge base
router.post('/addQuestionAnswer', function(req, res) {
    // callback when a new question answer will be created
    let questionsAnswerSavedCallback = function(id) {
        // unique id given to each questionsAnswerSet
        res.json({
            id: id
        });
    };
    saveQuestionAnswer(req,questionsAnswerSavedCallback);
});


module.exports = router;
