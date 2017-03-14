let neo4j = require('neo4j-driver').v1;
module.exports = function() {
<<<<<<< HEAD
let driver = neo4j.driver("bolt://192.168.1.33", neo4j.auth.basic('neo4j', 'neo4js'));
=======
let driver = neo4j.driver("bolt://192.168.1.137", neo4j.auth.basic('neo4j', 'neo4js'));
>>>>>>> b03e7a8e962bc5d05380370b3d1c93dac1818eed
    return driver;
};
