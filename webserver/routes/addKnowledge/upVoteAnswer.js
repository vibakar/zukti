let getNeo4jDriver = require('./../../neo4j/connection');
module.exports = function(type,value) {

    let query = `MATCH (n:${type})<-[r:answer]-() WHERE n.value=${JSON.stringify(value)}
                 SET r.rating = r.rating+1`;
    let session = getNeo4jDriver().session();
    session
        .run(query)
        .then(function(result) {
            // Completed!
            session.close();
        })
        .catch(function(error) {
            console.log(error);
        });
};
