let getNeo4jDriver = require('../../../neo4j/connection');

module.exports = function(resultCallback) {
    let query = 'MATCH (intent:intent) RETURN COLLECT(intent.name)';
    let session = getNeo4jDriver().session();

    session.run(query)
        .then((result) => {
            // Completed!
            session.close();
            resultCallback(result.records[0]._fields[0]);
        })
        .catch((error) => {
            console.log(error);
        });
};
