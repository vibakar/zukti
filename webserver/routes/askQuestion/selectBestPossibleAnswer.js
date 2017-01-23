var natural = require('natural');


module.exports = function(question,possibleQuestionsAnswers){
  // add questions to the classifier
  var classifier = new natural.BayesClassifier();
  possibleQuestionsAnswers.forEach(function(item){
    item.questions.forEach((question)=>{
      classifier.addDocument(question,item.textAnswer);
    });
  })
  // train the classifier with the above questions
  classifier.train();
  output=classifier.classify(question);
  console.log('*********************');
  console.log(output);
  console.log('*********************');
  return output;
}
