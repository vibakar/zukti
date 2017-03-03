let Cookie =require('react-cookie');
// get response of the question asked by user from neo4j database
let getNeo4jDriver = require('../../../neo4j/connection');
let User = require('./../../../models/user');

module.exports = function(intents, keywords, email, answerFoundCallback, noAnswerFoundCallback,  flag, correctedQuestion) {
            User.findOne({
                'local.email': email
            }, function(error,data) {
            if (error) {
                return error;
            }
              let domain = data.local.loggedinDomain;
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
              MATCH p=(token)-[:part_of|:subconcept|:actor_of|:same_as*]->(:concept{name:'${domain}'})
              WITH length(p) AS max,baseWords AS baseWords,intent AS intent
              UNWIND baseWords AS bw
              match p=(bw)-[:part_of|:subconcept|:actor_of|:same_as*]->(:concept{name:'${domain}'})
              WHERE length(p) = max WITH COLLECT(bw) AS bws,intent AS intent
              UNWIND bws AS keywords
              MATCH (keywords)<-[r]-(q:question)-[rel:answer]->(a)
              WHERE TYPE(r)=intent
              WITH a as a, rel as rel
              RETURN LABELS(a),COLLECT(a.value) `;

    let session = getNeo4jDriver().session();
    session
        .run(query)
        .then(function(result) {
            // Completed!
            session.close();
                  if (result.records.length === 0) {
                noAnswerFoundCallback();
            } else {
                let answerObj = {};
                answerObj.time = new Date().toLocaleString();
                if(flag == 1){
                  answerObj.extras = 'Showing results for : ' + "\""+correctedQuestion+"\"" + ' instead';
                }
                let resultArray = result.records.forEach((record) => {
                    let field = record._fields;
                    answerObj[field[0][0]] = field[1].map((value, index) => {
                        if (value !== '') {
                            return {
                                value: value
                            };
                        }
                    });
                });
// sending the answer to callback
                answerFoundCallback(answerObj);
            }
        })
        .catch(function(error) {
            console.log(error);
        });
      });
};
