module.exports = function(node1,node2,relation) {

    var neo4j = require('neo4j-driver').v1;

    var driver = neo4j.driver("bolt://192.168.56.1", neo4j.auth.basic("neo4j", "neo4js"));
    var query=`MATCH (a:concept{name:${JSON.stringify(node1)}}) CREATE (b:concept{name:${JSON.stringify(node2)}}) CREATE (a)-[r:${relation}]->(b)`;
JSON.stringify(query);
    var session = driver.session();
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
