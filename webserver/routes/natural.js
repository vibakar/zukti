let express = require('express');
let keywordExtractor=require('keyword-extractor');
let natural = require('natural');
let pos = require('pos');
let reactKeyword = require('../../config/concepts');
module.exports = function(input) {
    let question = input.toLowerCase();
    let output = [];
    //code to extract keywords from input
    let questionKeywords = keywordExtractor.extract(question,{
      language:'english',
      remove_digits:true,
      return_changed_case:true,
      remove_duplicates:true
    });
    let reactTerms=[];
    let normalKeywords=[];
    // code to extract react keywords
    questionKeywords.forEach(function(keyword) {
        if (reactKeyword.indexOf(keyword) > -1) {
            reactTerms.push(keyword);
        }
        else{
          normalKeywords.push(keyword);
        }
    });


    // code to extract verbs and pronouns from the input
    let questionVerbs=[];
    let verbs = ['VB', 'WDT', 'WP', 'WP$', 'WRB', 'VBD', 'VBG', 'VBN', 'VBP'];
    let words = new pos.Lexer().lex(question);
    let tagger = new pos.Tagger();
    let taggedWords = tagger.tag(words);
    for (i in taggedWords) {
        let taggedWord = taggedWords[i];
        let word = taggedWord[0];
        let tag = taggedWord[1];
        if (word == 'react') {
            continue;
        } else if (verbs.indexOf(tag) > -1) {
            output.push({
                word: natural.PorterStemmer.stem(word),
                pos: 'verb'
            });
            questionVerbs.push(word)
        }
    }
    // code for verbs and pronouns extraction over
    return ({
            keywords:normalKeywords,
            reactTerms:reactTerms,
            verbs:questionVerbs
        });
}
