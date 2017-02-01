let neo4j = require('neo4j-driver').v1;
module.exports = function() {
<<<<<<< HEAD
    let driver = neo4j.driver("bolt://192.168.1.34", neo4j.auth.basic("neo4j", "Wilkinson"));
=======

    let neo4j = require('neo4j-driver').v1;
    let driver = neo4j.driver("bolt://192.168.1.22", neo4j.auth.basic("neo4j", "shalini"));

>>>>>>> 094930ece5c4c7871a3538b2580dc8038c5714a2
    return driver;
};
