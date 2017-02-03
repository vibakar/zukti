let express = require('express');
let router = express.Router();
let Broadcast = require('../../models/broadcast');

// save broadcast message in mongodb
router.post('/', function(req, res) {
      let message = req.body.message;
      let type = req.body.type;
      let date = req.body.date;
      let messages = new Broadcast({text: message, type: type, date: date});
      messages.save((error)=>{
    if(error) {
      res.json({'saved':false});
    }
    else{
      res.json({'saved': true});
    }
  });
});

module.exports = router;
