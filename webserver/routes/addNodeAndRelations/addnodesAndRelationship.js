module.exports = function(node1,node2,relation,propertykeynode1,propertyvaluenode1,propertykeynode2,propertyvaluenode2,propertykeyrelation,propertyvaluerelation,node1detail,node1propdetail,relationdetail,relationpropdetail,node2detail,node2propdetail) {

    var neo4j = require('neo4j-driver').v1;
    var driver = neo4j.driver("bolt://192.168.1.207", neo4j.auth.basic("neo4j", "neo4js"));
    var query;
    var node1property;
    var node2property;
    var relationproperty;
    var session = driver.session();
    console.log("relationdetail is"+relationdetail+"***");
    console.log(node2);
    console.log(relation);


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
    if((node1detail=='newnode1')&&(relationdetail='newrelation')&&(node2detail=='newnode2')){
        query =`CREATE (a:${node1}{${node1property}})-[c:${relation}{${relationproperty}}]->(b:${node2}{${node2property}})`;
        console.log("in 135");

    }
    else if((node1detail=='newnode1')&&(relationdetail='newrelation')&&(node2detail=='existingnode2')){

        query=`MATCH (b:${node2}) CREATE(a:${node1}{${node1property}})-[c:${relation}{${relationproperty}}]->(b)`;
    }
    else if((node1detail=='newnode1')&&(relationdetail='existingrelation')&&(node2detail=='newnode2')){
        query =`CREATE (a:${node1}{${node1property}})-[c:${relation}{${relationproperty}}]->(b:${node2}{${node2property}})`;
    }
    else if((node1detail=='newnode1')&&(relationdetail='existingrelation')&&(node2detail=='existingnode2')){
        query=`MATCH (b:${node2}) CREATE(a:${node1}{${node1property}})-[c:${relation}{${relationproperty}'}]->(b)`;
    }
    else if((node1detail=='existingnode1')&&(relationdetail='newrelation')&&(node2detail=='newnode2')){
        query=`MATCH (a:${node1}) CREATE (a)-[c:${relation}{${relationproperty}}]->(b:${node2}{${node2property}})`;

    }
    else if((node1detail=='existingnode1')&&(relationdetail='newrelation')&&(node2detail=='existingnode2')){
        query=`MATCH (a:${node1}),(b:${node2}) CREATE (a)-[c:${relation}{${relationproperty}}]->(b)`;
    }
    else if((node1detail=='existingnode1')&&(relationdetail='existingrelation')&&(node2detail=='newnode2')){
        query=`MATCH (a:${node1}) CREATE (a)-[c:${relation}{${relationproperty}}]->(b:${node2}{${node2property}})`;
    }
    else if((node1detail=='existingnode1')&&(relationdetail='existingrelation')&&(node2detail=='existingnode2')){
        query=`MATCH (a:${node1}),(b:${node2}) CREATE (a)-[c:${relation}{${relationproperty}}]->(b)`;
    }
    else{
        console.log("issue in the query");
        relationdetail="something";
        if(node1detail=='newnode1'){
            query=`CREATE (a:${node1}{${node1property}})`;
        }
        if(node2detail=='newnode2'){
            query=`CREATE (a:${node2}{${node2property}})`;
        }
        if((node1detail=='newnode1')&&(node2detail=='newnode2')){
            query=`CREATE (a:${node1}{${node1property}}) CREATE (b:${node2}{${node2property}})`;
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
