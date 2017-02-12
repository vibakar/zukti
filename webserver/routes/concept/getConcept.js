let express = require('express');
let router = express.Router();
let fetchConcepts = require('./fetchConcepts');


router.get('/', function(req, res) {
    let resultCallback = function(concepts) {
        res.json({
            concepts
        });
    };
    fetchConcepts(resultCallback);
});

module.exports = router;
