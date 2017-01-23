const mongoose=require('mongoose');

let classificationSchema=mongoose.Schema({
  questions:{type :Array,'default':[]},
  answer:String
});

let Classification =mongoose.model('Classification',classificationSchema);

module.exports = Classification;
