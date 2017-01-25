let express=require('express');
let router=express.Router();
let addnodes=require('./addnodesAndRelationship')
//handling request to add nodes and relations from client
router.post('/a',function(req,res){
    console.log("Hello raghu",req.body.node1propdetail);
    let node1=req.body.node1;
    let node2=req.body.node2;
    let relation=req.body.relation;
    let propertykeynode1=req.body.propertykeynode1;
    let propertyvaluenode1=req.body.propertyvaluenode1;
    let propertykeynode2=req.body.propertykeynode2;
    let propertyvaluenode2=req.body.propertyvaluenode2;
    let propertykeyrelation=req.body.propertykeyrelation;
    let propertyvaluerelation=req.body.propertyvaluerelation;
    let node1detail=req.body.node1detail;
    let node1propdetail=req.body.node1propdetail;
    let relationdetail=req.body.relationdetail;
    let relationpropdetail=req.body.relationpropdetail;
    let node2detail=req.body.node2detail;
    let node2propdetail=req.body.node2propdetail;



    let resultCallback=function(response){
        res.send(response);
    }
        console.log("********************************************************");
    console.log("In addnode.js");
    console.log(node1);
    console.log(node2);
    console.log(relation);
    console.log("********************************************************");

    addnodes(node1,node2,relation,propertykeynode1,propertyvaluenode1,propertykeynode2,propertyvaluenode2,propertykeyrelation,propertyvaluerelation,node1detail,node1propdetail,relationdetail,relationpropdetail,node2detail,node2propdetail,resultCallback,res);
    res.send('saved');
});
module.exports = router;
