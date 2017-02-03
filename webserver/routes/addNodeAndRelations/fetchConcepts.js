let getNeo4jDriver = require('../../neo4j/connection');

module.exports = function(resultCallback) {
    // get all intent which have same_as to themselves these are our baseIntents
    let query = 'MATCH (n:concept) RETURN COLLECT(n.name)';
    let session = getNeo4jDriver().session();
console.log(resultCallback)
    session.run(query)
        .then((result) => {
            // Completed!
            session.close();
            console.log(result.records[0]._fields[0][0]);
            resultCallback(result.records[0]._fields[0][0]);
        })
        .catch((error) => {
            console.log(error);
        });
};
