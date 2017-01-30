let getNeo4jDriver = require('./../../neo4j/connection');
module.exports = function(answerID, answer, type, resultCallback) {


    let query = `MATCH (a:answer) where ID(a)=${answerID}
                SET
                a.${type}=${JSON.stringify(answer)}`;

    let session = getNeo4jDriver().session();
    session
        .run(query)
        .then(function() {
            session.close();
            resultCallback(true);
        })
        .catch(function(error) {
            console.log(error);
            resultCallback(false);
        });
}
