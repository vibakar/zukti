module.exports = function(node1,node2,relation,propertykeynode1,propertyvaluenode1,propertykeynode2,propertyvaluenode2,propertykeyrelation,propertyvaluerelation,node1detail,node1propdetail,relationdetail,relationpropdetail,node2detail,node2propdetail,relationChecked) {

    var neo4j = require('neo4j-driver').v1;
    var driver = neo4j.driver("bolt://192.168.1.207", neo4j.auth.basic("neo4j", "neo4js"));
    var query;
    var node1property;
    var node2property;
    var relationproperty;
    var session = driver.session();
    console.log("relationChecked is"+relationChecked+"***");
    console.log(node2);
    console.log(relation);
//Applying values to properties as key+value
    if(node1propdetail===true){
        node1property=`${propertykeynode1}:'${propertyvaluenode1}'`;
        console.log("It is true yaaar");
    }
    else{
        node1property='';
    }
    if(node2propdetail===true){
        node2property=`${propertykeynode2}:'${propertyvaluenode2}'`;
    }
    else{
        node2property=``;
    }
    if(relationpropdetail===true){
        relationproperty=`${propertykeyrelation}:'${propertyvaluerelation}'`;
    }
    else{
        relationproperty=``;
    }
//Checking if relation is checked or not
if(relationChecked===true){
    if((node1detail=='newnode1')&&(relationdetail='newrelation')&&(node2detail=='newnode2')){
        query =`CREATE (a:${node1}{${node1property}})-[c:${relation}{${relationproperty}}]->(b:${node2}{${node2property}})`;
        console.log("relation checked ? ",relationChecked);
        console.log(relationdetail+" relation detail in 103");

    }
    else if((node1detail=='newnode1')&&(relationdetail='newrelation')&&(node2detail=='existingnode2')){

        query=`MATCH (b:${node2}{${node2property}}) CREATE(a:${node1}{${node1property}})-[c:${relation}{${relationproperty}}]->(b)`;
    }
    else if((node1detail=='newnode1')&&(relationdetail='existingrelation')&&(node2detail=='newnode2')){
        query =`CREATE (a:${node1}{${node1property}})-[c:${relation}{${relationproperty}}]->(b:${node2}{${node2property}})`;
    }
    else if((node1detail=='newnode1')&&(relationdetail='existingrelation')&&(node2detail=='existingnode2')){
        query=`MATCH (b:${node2}{${node2property}}) CREATE(a:${node1}{${node1property}})-[c:${relation}{${relationproperty}'}]->(b)`;
    }
    else if((node1detail=='existingnode1')&&(relationdetail='newrelation')&&(node2detail=='newnode2')){
        query=`MATCH (a:${node1}{${node1property}}) CREATE (a)-[c:${relation}{${relationproperty}}]->(b:${node2}{${node2property}})`;

    }
    else if((node1detail=='existingnode1')&&(relationdetail='newrelation')&&(node2detail=='existingnode2')){
        query=`MATCH (a:${node1}{${node1property}}),(b:${node2}{${node2property}}) CREATE (a)-[c:${relation}{${relationproperty}}]->(b)`;
    }
    else if((node1detail=='existingnode1')&&(relationdetail='existingrelation')&&(node2detail=='newnode2')){
        query=`MATCH (a:${node1}{${node1property}}) CREATE (a)-[c:${relation}{${relationproperty}}]->(b:${node2}{${node2property}})`;
    }
    else if((node1detail=='existingnode1')&&(relationdetail='existingrelation')&&(node2detail=='existingnode2')){
        query=`MATCH (a:${node1}{${node1property}}),(b:${node2}{${node2property}}) CREATE (a)-[c:${relation}{${relationproperty}}]->(b)`;
    }
    else{
        console.log("issue in the query");

    }
}
//If relation is not checked run node1||node2 or both
else{
    console.log("relation is  not checked");

    if((node1detail=='newnode1')&&(node2detail=='newnode2')){

        query=`CREATE (a:${node1}{${node1property}}) CREATE (b:${node2}{${node2property}})`;
    }
    else if(node1detail=='newnode1'){
        query=`CREATE (a:${node1}{${node1property}})`;
    }
    else if(node2detail=='newnode2'){
        query=`CREATE (a:${node2}{${node2property}})`;
    }
    else{
        console.log("issue in the query");

    }
}


    console.log("********************************************************");
    console.log("in addnodesand realations");
    console.log("********************************************************");


    session
        .run(query)
        .then(function(result) {
            console.log(result);
            // Completed!
            session.close();

        })
        .catch(function(error) {
            console.log(error);
        });
}
