let express = require('express');
let router = express.Router();
let fetchConcepts = require('./functions/fetchConcepts');
let createConcept = require('./functions/createConcept');
let getConceptsAndRelations = require('./functions/getConceptsAndRelations');
// let deleteConcept = require('./functions/deleteConcept');
let renameConcepts = require('./functions/renameConcept');

router.get('/', function(req, res) {
    let resultCallback = function(concepts) {
        res.json({
            concepts
        });
    };
    fetchConcepts(resultCallback);
});

router.post('/createConcept', function(req, res) {
    let newConcept = req.body.newConcept;
    let oldConcept = req.body.oldConcept;
    let resultCallback = function(result) {
        res.json(result);
    };
    createConcept(newConcept, oldConcept, resultCallback);
});

// version 2
router.get('/rc', function(req, res) {
    let resultCallback = function(rc) {
        res.json({
            rc
        });
    };
    getConceptsAndRelations(resultCallback);
});

// renaming the concept
router.put('/renameConcept', function(req, res) {
    let renameConcept = req.body.renameConcept;
    let oldConcept = req.body.oldConcept;
    let resultCallback = function(result) {
        res.json(result);
    };
    renameConcepts(renameConcept, oldConcept, resultCallback);
});

module.exports = router;
