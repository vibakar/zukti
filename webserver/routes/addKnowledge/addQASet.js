let neo4j = require('neo4j-driver').v1;
let driver = neo4j.driver("bolt://192.168.1.34", neo4j.auth.basic("neo4j", "Wilkinson"));
module.exports = function(questionsAnswerSetCreatedCallback) {

    var query = `CREATE (a:answer {textAnswer:'',videoAnswer:'',blogAnswer:'',CodeSnippetAnswer:''}) return ID(a)`;
    var session = driver.session();
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
