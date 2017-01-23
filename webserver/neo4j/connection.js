module.exports = function() {
    let neo4j = require('neo4j-driver').v1;
    let driver = neo4j.driver("bolt://192.168.0.33", neo4j.auth.basic("neo4j", "Wilkinson"));
    console.log(driver);
    return driver;
};
