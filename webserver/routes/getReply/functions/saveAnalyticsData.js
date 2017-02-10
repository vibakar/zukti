let GinniAnalytics = require('../../../models/ginniAnalytics');
module.exports = function(isUnAnswered) {
    GinniAnalytics.findOne({},(err,data)=>{
    let ginniAnalytics
    if(!data){
       ginniAnalytics =new GinniAnalytics();
       ginniAnalytics.queriesAsked = 1;
       ginniAnalytics.unanswered = 0;
       if(isUnAnswered){
         ginniAnalytics.unanswered=ginniAnalytics.unanswered+1;
       }
    }
    else{
      ginniAnalytics =data;
      ginniAnalytics.queriesAsked=ginniAnalytics.queriesAsked+1;
      if(isUnAnswered){
        ginniAnalytics.unanswered=ginniAnalytics.unanswered+1;
      }
    }
    ginniAnalytics.save(function(err){
      if(err){
        console.log(err);
      }
    });
  });
};
