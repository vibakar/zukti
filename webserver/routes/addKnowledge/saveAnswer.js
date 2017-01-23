let neo4j = require('neo4j-driver').v1;
let driver = neo4j.driver("bolt://192.168.1.34", neo4j.auth.basic("neo4j", "Wilkinson"));
module.exports = function(nodeID, answer, type, successCB, failureCB) {


    var query = `MATCH (a:answer) where ID(a)=${nodeID}
                SET
                a.${type}=${JSON.stringify(answer)}`;

    var session = driver.session();
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
