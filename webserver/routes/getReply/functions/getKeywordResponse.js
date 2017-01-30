// to get driver from connection.js file in neo4j
let getNeo4jDriver = require('../../../neo4j/connection');

module.exports = function(keyword) {

    let query = `MATCH (n:intent) WHERE n.name=${JSON.stringify(keyword)}`;
    let session = getNeo4jDriver().session();
    session.run(query)
        .then((result) => {
            console.log(result);
            // Completed!
            session.close();
            successCB({
                nodeID: result.records[0]._fields[0].identity.low,
                categoryName: categoryName
            });
        })
        .catch((error) => {
            console.log(error);
            failureCB(error);
        });
};
