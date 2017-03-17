let getNeo4jDriver = require('../../neo4j/connection');

/* @yuvashree: to get all data */
let allQuestionAnswer = function(resultCallback) {
    // get all intent which have same_as to themselves these are our baseIntents
    let query = 'MATCH (n:question)-[r:answer ]->(a) RETURN n.value,COLLECT(Labels(a)+a.value)';
    let session = getNeo4jDriver().session();

    session.run(query)
        .then((result) => {
            session.close();
            resultCallback(result.records);
        })
        .catch((error) => {
            console.log(error);
        });
};

/* @yuvashree: to filter data according to intent */
let intentAnswer = function(intent, resultCallback) {
    // get all intent which have same_as to themselves these are our baseIntents
    let query = `MATCH (c:concept)<-[q]-(n:question)-[r:answer]->(a) where type(q)='`+intent+`' RETURN n.value,COLLECT(Labels(a)+a.value) `;
    let session = getNeo4jDriver().session();

    session.run(query)
        .then((result) => {
            session.close();
            resultCallback(result.records);
        })
        .catch((error) => {
            console.log(error);
        });
};

/* @yuvashree: to filter data according to keyword */
let keywordAnswer = function(keyword, resultCallback) {
    // get all intent which have same_as to themselves these are our baseIntents
    let query = `MATCH (c:concept)<-[q]-(n:question)-[r:answer]->(a) where c.name='`+keyword+`' RETURN n.value,COLLECT(Labels(a)+a.value)`;
    let session = getNeo4jDriver().session();

    session.run(query)
        .then((result) => {
            session.close();
            resultCallback(result.records);
        })
        .catch((error) => {
            console.log(error);
        });
};

/* @yuvashree: to filter data according to keyword and intent */
let keywordintentAnswer = function(intent, keyword, resultCallback) {
    // get all intent which have same_as to themselves these are our baseIntents
    let query = `MATCH (c:concept)<-[q]-(n:question)-[r:answer]->(a) where type(q)='`+intent+`' and c.name='`+keyword+`' RETURN n.value,COLLECT(Labels(a)+a.value) `;
    let session = getNeo4jDriver().session();

    session.run(query)
        .then((result) => {
            session.close();
            resultCallback(result.records);
        })
        .catch((error) => {
            console.log(error);
        });
};

module.exports = {
  allQuestionAnswer,
  intentAnswer,
  keywordAnswer,
  keywordintentAnswer
}
