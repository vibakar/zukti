const mongoose = require('mongoose');

const unansweredQuerySchema = mongoose.Schema({
    user: String,
    question: String,
    keywords: Array,
    intents: Array
});

module.exports = mongoose.model('unansweredQuery', unansweredQuerySchema);
