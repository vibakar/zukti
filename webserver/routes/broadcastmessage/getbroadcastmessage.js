let express = require('express');
let router = express.Router();
let Broadcast = require('../../models/broadcast');

//get broadcast messages saved in mongodb
router.get('/', function(req, res) {


    Broadcast.find(function(err, broadcast) {
        if (err)
            res.send(err);
        else
            res.json(broadcast);
    });
});

module.exports = router;
