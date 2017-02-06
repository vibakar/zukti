let getNeo4jDriver = require('../../neo4j/connection');

module.exports = function(resultCallback) {
    // get all intent which have same_as to themselves these are our baseIntents
    let query = 'MATCH (n:question)-[]->(m:answer) RETURN COLLECT(n.value),COLLECT(m)';
    let session = getNeo4jDriver().session();

    session.run(query)
        .then((result) => {

            session.close();
            resultCallback(result.records[0]._fields[0],result.records[0]._fields[1]);
            //console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
};
