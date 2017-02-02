let UnansweredQuery = require('../../../models/unansweredQuery');
module.exports = function(user, question, keywords, intents) {
    let unansweredQuery = new UnansweredQuery();
    console.log(intents);
    console.log(keywords);
    unansweredQuery.user = 'vishal7201@gmail.com';
    unansweredQuery.question = question;
    unansweredQuery.keywords = keywords;
    unansweredQuery.intents = intents;
    unansweredQuery.save((error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('saved ' + question);
        }
    });
};
