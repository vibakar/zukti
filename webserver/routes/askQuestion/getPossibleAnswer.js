let getNeo4jDriver = require('./../../neo4j/connection');
let selectBestPossibleAnswers = require('./selectBestPossibleAnswer');
module.exports = function(question, reactTerms, verbs, resultFoundCallback, resultNotFoundCallback) {
    // thought IF KEYWORD THEN SEARCH THOSE LABELS ELSE SEARCH ENTIRE
    // it includes verb relations
    let relation = '';
    let query = '';
    if (verbs.length === 0) {
        resultNotFoundCallback(false);
    } else {
        verbs.forEach(function(verb) {
            relation += ':' + verb + '|';
        });
        relation = relation.substring(0, relation.length - 1);
        let reactKeywords = 'tags';
        reactTerms.forEach(function(terms) {
            reactKeywords = reactKeywords + ' : ' + terms
        });
        query = `MATCH (questions:${reactKeywords})-[${relation}]->(results)
                 return
                 [questions.question,results.textAnswer,results.videoAnswer,results.blogAnswer,results.CodeSnippetAnswer]`;
        let questionAnswerResultCallback = function(questionAsked, result) {
            if (result.records.length === 0) {
                resultNotFoundCallback();
            } else {
                let records = result.records;
                // tihs is use classifier
                let answer = selectBestPossibleAnswers(questionAsked, records);
                resultFoundCallback(answer);
            }
        }

        let errorCallback = function errorCallback() {
            resultNotFoundCallback(true);
        }

        queryNeo4j(query, question, questionAnswerResultCallback, errorCallback);
    }
}


function queryNeo4j(query, question, resultCallback, errorCallback) {
    let session = getNeo4jDriver().session();
    session
        .run(query)
        .then(function(result) {
            console.log(result);
            // Completed!
            session.close();
            resultCallback(question, result);
        })
        .catch(function(error) {
            console.log(error);
            errorCallback(error);
        });
}
