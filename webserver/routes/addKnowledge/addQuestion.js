let getNeo4jDriver = require('./../../neo4j/connection');
var extractInfoFromQuestion = require('../natural');
let reactKeyword = require('../../../config/concepts');
module.exports = function(res, questionsCategoryID, questionsAnswerSetID, question, resultCallback) {
    let qobject = extractInfoFromQuestion(question);
    let labels = 'tags';
    if (qobject.keywords.length == 0 || qobject.verbs.length == 0) {
        res.json({
            stored: false
        });
    }
    let conceptInQuestionQuery = '';
    qobject.keywords.forEach(function(keyword) {
        labels += ':' + keyword;
      });
    qobject.reactTerms.forEach(function(term){
      conceptInQuestionQuery += `WITH node as node MATCH (keyword:concept:${term}) MERGE (node)-[:relatedTo]->(keyword) `;
      labels+=':'+term;
    });
    var relationshipQuery = '';
    // if no verb is present then relation will be belongs_to
    if(qobject.verbs.length==0){
      relationshipQuery += `MERGE (node)<-[:belongs_to]-(question)`
    }
    qobject.verbs.forEach(function(verb) {
        relationshipQuery += ` MERGE (node)<-[:${verb}]-(question)`;
    });

    let query = `MATCH (questionsCategory) WHERE ID(questionsCategory)=${questionsCategoryID}
                 MATCH (node) WHERE ID(node)=${questionsAnswerSetID}
                 CREATE (question:tags:${labels} {question:${JSON.stringify(question)}})
                 CREATE (questionsCategory)-[:contains]->(question)
                 ${relationshipQuery}
                ${conceptInQuestionQuery}`;
    console.log(query);
    let session = getNeo4jDriver().session();
    session.run(query)
    session
        .then(function(result) {
            console.log(result);
            // Completed!
            session.close();
            resultCallback(result);
        })
        .catch(function(error) {
            console.log('************************************************************');
            console.log(error);
            resultCallback(error);
        });
}
