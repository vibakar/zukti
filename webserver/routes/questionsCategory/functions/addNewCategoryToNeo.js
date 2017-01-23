module.exports = function(categoryName, successCB, failureCB) {


    let neo4j = require('neo4j-driver').v1;
    let driver = neo4j.driver("bolt://192.168.1.34", neo4j.auth.basic("neo4j", "Wilkinson"));
    let query = `CREATE (qc:questionCategory {category:${JSON.stringify(categoryName)}}) return qc`;
    let session = driver.session();
    session
        .run(query)
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
