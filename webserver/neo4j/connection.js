let neo4j = require('neo4j-driver').v1;
module.exports = function() {
<<<<<<< HEAD
let driver = neo4j.driver("bolt://192.168.1.137", neo4j.auth.basic('neo4j', 'neo4js'));
=======

let driver = neo4j.driver("bolt://192.168.1.60", neo4j.auth.basic('neo4j', 'neo4js'));
>>>>>>> b1b19e39a925a4ae0671fb25cc1a2ce9566b9796
    return driver;
};
