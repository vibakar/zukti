let express = require('express');
let fetchBaseIntents = require('./functions/fetchBaseIntents');
let router = express.Router();

// route to all base intents e.g what why
router.get('/getBaseIntents', function(req, res) {
    let resultCallback = function(result) {
        res.json({
            baseIntents: result
        });
    };
    fetchBaseIntents(resultCallback);
});


module.exports = router;
