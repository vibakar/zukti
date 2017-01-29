let getNeo4jDriver = require('./../../neo4j/connection');

module.exports = function(answerID, question, keywords, intents, resultCallback) {

    let query = `MATCH (a:answer) WHERE ID(a)=${answerID}
                 WITH a as a
                 MATCH (n:concept) where n.name=${JSON.stringify(keywords[0])}
                 MERGE (a)-[:${intents[0]}]->(n)
                 MERGE (q:question {value:${JSON.stringify(question)}})-[:${intents[0]}]->(n)
                 RETURN ID(n)`
    let session = getNeo4jDriver().session();
    session
        .run(query)
        .then(function(result) {
            // Completed!
            session.close();
            resultCallback(result.records[0]._fields[0].low);
        })
        .catch(function(error) {
            console.log(error);
        });
};
