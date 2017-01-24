module.exports = function() {
    let neo4j = require('neo4j-driver').v1;
    let driver = neo4j.driver("bolt://192.168.1.39", neo4j.auth.basic("neo4j", "runald"));
    console.log(driver);
    return driver;
};
