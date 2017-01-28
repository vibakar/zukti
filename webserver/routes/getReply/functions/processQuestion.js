let natural = require('natural');
let keywordLexicon = require('../../../lexicon/keywordLexicon.json');
let intentLexicon = require('../../../lexicon/intentLexicon.json');

module.exports = function(sentence) {
    let tokenizer = new natural.WordTokenizer();
    let keywords = [];
    let intents = [];
    let tokens = tokenizer.tokenize(sentence);
    tokens.forEach(function(token) {
        if (keywordLexicon.indexOf(token) > -1) {
            keywords.push(token);
        } else if (intentLexicon.indexOf(token) > -1) {
            intents.push(token);
        }
    });
    console.log(tokens);
    return {
        keywords,
        intents
    };
};
