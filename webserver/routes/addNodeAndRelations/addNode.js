let express=require('express');
let router=express.Router();
let addnodes=require('./addnodesAndRelationship')
//handling request to add nodes and relations from client
router.post('/a',function(req,res){
    let node1=req.body.node1;
    let node2=req.body.node2;
    let relation=req.body.relation;
    let resultCallback=function(response){
        res.send(response);
    }
        console.log("********************************************************");
    console.log("In addnode.js");
    console.log(node1);
    console.log(node2);
    console.log(relation);
    console.log("********************************************************");

    addnodes(node1,node2,relation,resultCallback,res);
    res.send('saved');
});
module.exports = router;
