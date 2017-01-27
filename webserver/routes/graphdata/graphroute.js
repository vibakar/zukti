let express = require('express');
let router = express.Router();
let getGraphData = require('./getGraphData');
let alternate = require('./alternate');
router.get('/', function(req, res) {

  let resultcall = function(result) {
      res.send(result);
  }
  //getGraphData(resultcall);
  alternate(resultcall);

});
module.exports = router;
