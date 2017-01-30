const mongoose=require('mongoose');

let queriesSchema=mongoose.Schema({
  questions:{type :Array,'default':[]},
  answer:String
});

let Queries =mongoose.model('Queries',queriesSchema);

module.exports = Queries;
