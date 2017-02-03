let driver = require('./../../neo4j/connection');

module.exports = function(node1,node2,relation) {

    var neo4j = require('neo4j-driver').v1;

    var query=`MATCH (a:concept{name:'${node1}'}) CREATE (b:concept{name:'${node2}'}) CREATE (a)-[r:${relation}]->(b)`;

    var session = driver().session();
    console.log(node2);
    console.log(relation);

    session
        .run(query)
        .then(function(result) {
            console.log(result);
            console.log("Completed");
            // Completed!
            session.close();

        })
        .catch(function(error) {
            console.log(error);
        });
}
