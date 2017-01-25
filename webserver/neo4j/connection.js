module.exports = function() {
    let neo4j = require('neo4j-driver').v1;
    let driver = neo4j.driver("bolt://192.168.1.99", neo4j.auth.basic("neo4j", "Karthimuthu1."));
    console.log(driver);
    return driver;
};
