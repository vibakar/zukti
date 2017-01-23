let getNeo4jDriver = require('./../../neo4j/connection');

module.exports = function(questionsAnswerSetCreatedCallback) {

  var query = `CREATE (a:answer {textAnswer:'',videoAnswer:'',blogAnswer:'',CodeSnippetAnswer:''}) return ID(a)`;
  var session = getNeo4jDriver().session();
  session
  .run(query)
  .then(function(result) {
    console.log(result);
    // Completed!
    session.close();
    questionsAnswerSetCreatedCallback(result.records[0]._fields[0].low);
  })
  .catch(function(error) {
    console.log(error);
  });
};
