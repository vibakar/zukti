let getNeo4jDriver = require('../../../neo4j/connection');
let getLexicon = require('../../../lexicon/getLexicon');
module.exports = function(baseIntent, newSameAsIntent, resultCallback) {
    let query = `MATCH (n:intent {name:${JSON.stringify(baseIntent)}})
                 MERGE (:intent {name:${JSON.stringify(newSameAsIntent)}})-[:same_as]->(n)`;
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
