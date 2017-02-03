let neo4j = require('neo4j-driver').v1;
module.exports = function() {
    let driver = neo4j.driver("bolt://192.168.1.34", neo4j.auth.basic("neo4j", "Wilkinson"));
    return driver;
};
