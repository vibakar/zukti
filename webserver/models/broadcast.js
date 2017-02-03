const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const broadcast = new Schema({
    text: String,
    type: String,
    date: String
  })

const broadcastInformation = mongoose.model('Broadcast', broadcast);
module.exports = broadcastInformation;
