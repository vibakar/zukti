/* intent of the file
called from file intent.js (which pass NewIntent parameter to function) */
let getNeo4jDriver = require('../../../neo4j/connection');
let getLexicon = require('../../../lexicon/getLexicon');

module.exports = function( NewIntent, resultCallback) {
    let query =`CREATE (n: intent {name:${JSON.stringify(NewIntent)}}),(n)-[:same_as]->(n)`;
    let session = getNeo4jDriver().session();
    session.run(query)
        .then((result) => {
            // Completed!
            session.close();
            // update the lexicon json files in lexicon folder
            getLexicon();
            resultCallback({
                saved: true
            });

        })
        .catch((error) => {
            resultCallback({
                saved: false
            });
            console.log(error);
        });
};
