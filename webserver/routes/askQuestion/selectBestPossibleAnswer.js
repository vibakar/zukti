/*
records is an array of record
record is a array containing _fields array
_fields array contains actual database
[question,text,video,blog,code]
This function will first train the classifier
with the questions feteched from Neo4j database and then compare it will the user question
*/
// add questions to the classifier

let natural = require('natural');

module.exports = function(question,records){
  let classifier = new natural.BayesClassifier();
  console.log('Inside best');
  console.log(records);
  records.forEach(function(record,recordIndex){
      record._fields.forEach(function(field,index){
        console.log(field);

          classifier.addDocument(field[0],[recordIndex,index]);
      });
  })
  // train the classifier with the above questions
  classifier.train();
  output=classifier.classify(question.value);
  // to get index of record and field
  let outIndex=output.split(',');
  let result = records[outIndex[0]]._fields[outIndex[1]];
  let resultObj={textAnswer:result[1],otherResult:{textAnswer:result[1],videoUrl:result[2],blogUrl:result[3]}};
  return resultObj;
}
