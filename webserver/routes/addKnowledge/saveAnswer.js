let getNeo4jDriver = require('./../../neo4j/connection');
module.exports = function(nodeID, answer, type, successCB, failureCB) {


    var query = `MATCH (a:answer) where ID(a)=${nodeID}
                SET
                a.${type}=${JSON.stringify(answer)}`;

    var session = getNeo4jDriver().session();
    console.log('***************************************');
    console.log(query);
    console.log('**************************************');
    //creating query to add question keywords to specific question set
    session
        .run(query)
        .then(function(result) {
            console.log("******************************");
            console.log(result);
            console.log('******************************');
            // Completed!
            session.close();
            successCB();
        })
        .catch(function(error) {
            console.log(error);
            failureCB();
        });
}
