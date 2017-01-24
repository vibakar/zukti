module.exports = function(resultcall) {
    let neo4j = require('neo4j-driver').v1;
    let driver = neo4j.driver("bolt://192.168.1.113", neo4j.auth.basic("neo4j", "neo4js"));
    let session = driver.session();

    var query = ':POST /db/data/transaction/commit {"statements":[{"statement":"MATCH path = (n)-[r]->(m) RETURN path", "resultDataContents":["graph"]}]}';

    session
        .run(query)
        .then(function(result) {
             console.log(result);
            // Completed!
            session.close();
            driver.close();
          
            resultcall(result);
        })
        .catch(function(error) {
            console.log(error);
        });
}
