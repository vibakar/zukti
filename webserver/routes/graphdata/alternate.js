module.exports = function(resultcall){
var r=require("request");
var username = "neo4j";
var  password = "runald";
var auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
var txUrl = "http://192.168.1.39:7474/db/data/transaction/commit";
function cypher(query,params,cb) {
  r.post({uri:txUrl,
    headers : {
      "Authorization" : auth
  },
          json:{statements:[{statement:query,parameters:params}]}},
         function(err,res) { cb(err,res.body)})

}

var query="MATCH path = (n)-[r]->(m) RETURN path"
var params={"resultDataContents":"graph"}
var cb=function(err,data) {

  var data1 = JSON.stringify(data);
  console.log(data1);
  //to check duplicate nodes

//   function idIndex(a,id) {
//   for (var i=0;i<a.length;i++) {
//     if (a[i].id == id) return i;}
//   return null;
// }
console.log(data.results[0]);
//to separate required nodes and links

// var nodes=[], links=[];
// data1.results[0].data.forEach(function (r) {
//   for(var j=0;j<2;j++){
//     if((idIndex(nodes,r.meta[j].id) === null) && (r.meta[j].type === "node")){
//     nodes.push({id:r.meta[j].id,label:r.row[j],title:r.row[j]})
//   }
// }
// console.log(nodes);
// });

//if (idIndex(nodes,r.meta[]) == null)
 //nodes.push({id:n.id,label:n.labels[0],title:n.properties.name});



  resultcall(data);
 }

cypher(query,params,cb);
}
