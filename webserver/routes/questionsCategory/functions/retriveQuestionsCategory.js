let getNeo4jDriver = require('../../../neo4j/connection');

module.exports = function(successCB, failureCB) {


    let query = `MATCH (qc:questionCategory) WHERE qc.category<>'' RETURN qc`;

    let session = getNeo4jDriver().session();
    session
        .run(query)
        .then(function(result) {
            console.log(result);
            // Completed!
            session.close();
            // retrive all category names from answer

            let categories=result.records.map(function(record){
              return {nodeID:record._fields[0].identity.low,categoryName:record._fields[0].properties.category};
            });
            successCB(categories);
        })
        .catch(function(error) {
            console.log(error);
            failureCB();
        });
};
