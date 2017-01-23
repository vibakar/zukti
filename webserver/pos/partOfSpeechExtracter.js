var keywordExtractor = require("keyword-extractor");
var pos = require('pos');

module.exports = function(sentece) {

    let extraction_result = keywordExtractor.extract(sentence, {
        language: "english",
        remove_digits: true,
        return_changed_case: true,
        remove_duplicates: true
    });

    let tagger = new pos.Tagger();
    var words = new pos.Lexer().lex(sentence);

    var taggedWords = tagger.tag(words);
    for (i in taggedWords) {
        var taggedWord = taggedWords[i];
        var word = taggedWord[0];
        var tag = taggedWord[1];
    }
    let output={taggedWords:taggedWords,keywords:extraction_result};
    return output;
}
