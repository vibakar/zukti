let getNeo4jDriver = require('./../../neo4j/connection');

module.exports = function(answerID, question, keywords, intents, resultCallback) {
  console.log(keywords);
    let mainIntent = intents[intents.length-1];
    let query = ` MATCH (a) where ID(a)=${answerID}
                  OPTIONAL MATCH (a)<-[rel]-(q:question),(a)-[r]->(c:concept) DETACH DELETE q,rel,r
                  DETACH DELETE q,rel,r
                  WITH a as a
                  UNWIND ${JSON.stringify(keywords)} as token
                  MATCH (n:concept)
                  WHERE n.name = token
                  OPTIONAL MATCH (n)-[r:same_as]->(main)
                  WITH COLLECT(main) AS baseWords
                  UNWIND baseWords AS token
                  MATCH (token)-[r:subconcept*]->(:concept {name:'react'})
                  WITH MAX(SIZE(r)) AS max,baseWords AS baseWords
                  UNWIND baseWords AS bw
                  MATCH (bw)-[r:subconcept*]->(:concept {name:'react'})
                  WHERE SIZE(r) = max WITH COLLECT(bw) AS bws
                  UNWIND bws AS keywords
                  MATCH (a:answer) WHERE ID(a)=${answerID}
                  WITH a AS a,keywords as keywords
                  MERGE (a)-[:${mainIntent}]->(keywords)
                  MERGE
                  (q:question {value:${JSON.stringify(question)}})-[:${mainIntent}]->(keywords)
                  MERGE (q)-[:${mainIntent}]-(a)
                  RETURN ID(q)`;

    let session = getNeo4jDriver().session();
    session
        .run(query)
        .then(function(result) {
            // Completed!
            session.close();
            resultCallback(result.records[0]._fields[0].low);
        })
        .catch(function(error) {
            console.log(error);
        });
};
