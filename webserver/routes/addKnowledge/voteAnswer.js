let getNeo4jDriver = require('./../../neo4j/connection');
module.exports = function(liked,type,value) {
    let voteValue = liked?1:-1;
    let query = `MATCH (n:${type})<-[r:answer]-() WHERE n.value=${JSON.stringify(value)}
                 SET r.rating = r.rating+${voteValue}`;
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
