// to get driver from connection.js file in neo4j
let getNeo4jDriver = require('../../../neo4j/connection');

module.exports = function(keywords) {

    let query = `UNWIND ${JSON.stringify(keywords)} as token
                 MATCH (n:concept)
                 WHERE n.name = token
                 OPTIONAL MATCH (n)-[r:same_as]->(main)
                 WITH COLLECT(main) as baseWords
                 UNWIND baseWords as token
                 MATCH (token)-[r:subconcept*]->(:concept {name:'react'})
                 WITH MAX(SIZE(r)) as max,baseWords as baseWords
                 UNWIND baseWords as bw
                 MATCH (bw)-[r:subconcept*]->(:concept {name:'react'})
                 WHERE SIZE(r) = max return bw,size(r)`;

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
