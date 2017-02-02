let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Broadcast = require('../../models/broadcast');

//save broadcast message
router.get('/', function(req, res) {


    Broadcast.find(function(err, broadcast) {
        if (err)
            res.send(err);
        else
            res.json(broadcast);
    });
});

module.exports = router;
