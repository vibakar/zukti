const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ginniAnalytics = new Schema({
    queriesAsked:Number,
    unanswered:Number
    })

const ginniAnalytics  = mongoose.model('ginniAnalytics', ginniAnalytics);
module.exports = ginniAnalytics;
