let getNeo4jDriver = require('../../../neo4j/connection');
module.exports = function(intents, keywords, questionResultCallback, noAnswerFoundCallback) {

    let query = `UNWIND ${JSON.stringify(intents)} AS token
                 MATCH (n:intent)
                 WHERE n.name = token
                 OPTIONAL MATCH (n)-[r:same_as]->(main)
                 WITH  LAST(COLLECT(main.name)) AS intent
                 UNWIND ${JSON.stringify(keywords)} AS token
                 MATCH (n:concept)
                 WHERE n.name = token
                 OPTIONAL MATCH (n)-[r:same_as]->(main)
                 WITH COLLECT(main) AS baseWords,intent AS intent
                 UNWIND baseWords AS token
                 MATCH (token)-[r:subconcept*]->(:concept {name:'react'})
                 WITH MAX(SIZE(r)) AS max,baseWords AS baseWords,intent AS intent
                 UNWIND baseWords AS bw
                 MATCH (bw)-[r:subconcept*]->(:concept {name:'react'})
                 WHERE SIZE(r) = max WITH COLLECT(bw) AS bws,intent AS intent
                 UNWIND bws AS keywords
                 MATCH (keywords)<-[r]-(a:answer)
                 WHERE TYPE(r)=intent
                 RETURN COLLECT(a)`;

    let session = getNeo4jDriver().session();
    session
        .run(query)
        .then(function(result) {
            // Completed!
            session.close();
            console.log(result);
            if (result.records[0]._fields[0].length === 0) {
                noAnswerFoundCallback();
            } else {
                let properties = result.records[0]._fields[0][0].properties;
                let resultObj = {
                    textAnswer: properties.textAnswer,
                    otherResult: {
                        textAnswer: properties.textAnswer,
                        videoUrl: properties.videoAnswer,
                        blogUrl: properties.blogAnswer
                    }
                };
                questionResultCallback(resultObj);
            }
        })
        .catch(function(error) {
            console.log(error);
        });
};