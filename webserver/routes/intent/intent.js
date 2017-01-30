let express = require('express');
let fetchBaseIntents = require('./functions/fetchBaseIntents');
let fetchSameAsIntents = require('./functions/fetchSameAsIntents');
let addNewSameAsIntent = require('./functions/addNewSameAsIntent');
let router = express.Router();

// route to all base intents e.g what why
router.get('/baseIntents', function(req, res) {
    let resultCallback = function(baseIntents) {
        res.json({
            baseIntents
        });
    };
    fetchBaseIntents(resultCallback);
});
router.get('/getSameAsIntents', function(req, res) {
    let baseIntent = req.query.baseIntent;
    let resultCallback = function(sameAsIntents) {
        res.json({
            sameAsIntents
        });
    };
    fetchSameAsIntents(baseIntent, resultCallback);
});
router.post('/addNewSameAsIntent', function(req, res) {
    let baseIntent = req.body.baseIntent;
    let newSameAsIntent = req.body.newSameAsIntent;
    let resultCallback = function(result) {
        res.json(result);
    };
    addNewSameAsIntent(baseIntent, newSameAsIntent, resultCallback);
});


module.exports = router;