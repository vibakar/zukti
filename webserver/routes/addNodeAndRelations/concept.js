let express = require('express');
let fetchBaseConcepts = require('./fetchConcepts');

let router = express.Router();

// route to all base intents e.g what why
router.get('/baseConcepts', function(req, res) {
    let resultCallback = function(baseConcepts) {
        res.json({
            baseConcepts
        });
    };
    fetchBaseConcepts(resultCallback);
});



module.exports = router;
