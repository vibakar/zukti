let neo4j = require('neo4j-driver').v1;
let driver = neo4j.driver("bolt://192.168.1.34", neo4j.auth.basic("neo4j", "Wilkinson"));

module.exports = function(keywords, reactTerms, verbs, resultCallback) {
    // thought IF KEYWORD THEN SEARCH THOSE LABELS ELSE SEARCH ENTIRE
    let whereQuery = '';
    let relation = '';
    let query = '';

    if (keywords.length != 0) {
        keywords.forEach(function(keyword) {
            whereQuery += 'OR probNodes:' + keyword;
        });
    }
    if (verbs.length != 0) {
        verbs.forEach(function(verb) {
            relation += ':' + verb + '|';
        });
        relation = relation.substring(0, relation.length - 1);
    }
    if (verbs.length == 0) {
        relation = ':belongs_to';
    }
    if (verbs.length == 0 && keywords.length == 0) {
        whereQuery = '';
        query = ` MATCH (q:concept:${reactTerms[0]}) return q`;
    } else {
        let reactKeywords = 'tags';
        reactTerms.forEach(function(terms) {
            reactKeywords += ':' + terms
        })
        query = `MATCH (probNodes:${reactKeywords})-[${relation}]->(results)
      WHERE probNodes:${reactTerms[0]} ${whereQuery}
      return results,probNodes`;
    }
    console.log('*********************');
    console.log(query);
    console.log('**********************');

    let session = driver.session();
    session
        .run(query)
        .then(function(result) {
            console.log(result);
            // Completed!
            session.close();
            resultCallback(result);
        })
        .catch(function(error) {
            resultCallback(error);
        });

}
