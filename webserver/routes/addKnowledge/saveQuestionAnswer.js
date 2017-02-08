let getNeo4jDriver = require('./../../neo4j/connection');
let processQuestion = require('./processQuestion');
module.exports = function(req,questionsAnswerSavedCallback) {

  //  let query = `CREATE (a:answer {textAnswer:'',videoAnswer:'',blogAnswer:'',CodeSnippetAnswer:''})
  //               return ID(a)`;
    let question = req.body.question;
    let blogs = req.body.blogs;
    let texts = req.body.texts;
    let videos = req.body.videos;
    let questionInfo = processQuestion(question);
    let keywords = questionInfo.keywords;
    let intents = questionInfo.intents;
    let mainIntent = intents[intents.length-1];
    let blogsQuery='';
    let textsQuery='';
    let videoQuery='';
    console.log(keywords);
    console.log(question);
     blogs.forEach((item)=>{
      let blog = item.trim();
      if(blog!=''){
          blogsQuery  =blogsQuery+ `MERGE (a)-[:isA]-> (:blog {value:${JSON.stringify(blog)}}) `;
      }
    });
    videos.forEach((item)=>{
       let video = item.trim();
       if(video!=''){
           videoQuery =videoQuery+ `MERGE (a)-[:isA]-> (:video {value:${JSON.stringify(video)}}) `;
       }
    });
    texts.forEach((item)=>{
       let text = item.trim();
       if(text!=''){
           textsQuery =textsQuery+`MERGE (a)-[:isA]-> (:text {value:${JSON.stringify(text)}}) `;
       }
    });
    let query = ` UNWIND ${JSON.stringify(keywords)}  as token
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
                  MERGE (q:question {value:${JSON.stringify(question)}})-[:${mainIntent}]->(a:answer)-[:${mainIntent}]->(keywords)
                  MERGE((q)-[:${mainIntent}]->(keywords))
                  ${blogsQuery} ${videoQuery} ${textsQuery}
                  RETURN 1`
    let session = getNeo4jDriver().session();
    session
        .run(query)
        .then(function(result) {
            // Completed!
            session.close();
            console.log(query);
            console.log(result);
            questionsAnswerSavedCallback(1);
        })
        .catch(function(error) {
            console.log(error);
        });
};
