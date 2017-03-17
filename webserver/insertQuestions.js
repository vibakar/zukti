/* @santhosh: upload csv to add question and answers to neo4j graph */
const fs = require('fs');
const rl = require('readline');
// let driver = require(__dirname + './neo4j/connection');
let neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver("bolt://192.168.1.64", neo4j.auth.basic("neo4j", "neo4js"));
 module.exports  = function(name) {
    var lineNumber = 0;
    console.log(__dirname);
    let rd = rl.createInterface({
        input: fs.createReadStream(__dirname + './CsvFiles/' + name),
        // output: process.stdout,
        terminal: false
    });

    var session = driver.session();
    rd.on('line', function(data) {
        lineNumber = lineNumber + 1;
        let linearr = data.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        if (lineNumber !== 1 && linearr[3] !== null) {
            if (linearr[8] !== '') {
                query = `match (n:${linearr[0]} {id:${linearr[1]}}) merge (q:question{value:"${linearr[4]}"}) merge (q)-[:${linearr[3]}]->(n)  merge (i:image{value:"${linearr[8]}"}) merge (q)-[:answer{rating:0}]->(i)`;
                session.run(query).then(function(result) {
                    session.close();
                    //  console.log(query);
                    // console.log(result);
                    driver.close();
                }).catch(function(error) {
                    //  console.log(query);
                    // console.log(error);
                    driver.close();
                });
            } else {
                if (linearr[5].length > 1) {
                    var query = `match (n:${linearr[0]} {id:${linearr[1]}}) merge (q:question{value:"${linearr[4]}"}) merge (q)-[:${linearr[3]}]->(n)  merge (t:text{value:"${linearr[5]}"}) merge (q)-[:answer{rating:0}]->(t)`;

                    //  console.log("query:  ",query);
                    // console.log('/n Child Name: '+childNameArray[i]);

                    session.run(query).then(function(result) {
                        session.close();
                        //  console.log(query);
                        // console.log(result);
                        driver.close();
                    }).catch(function(error) {
                        //  console.log(query);
                        // console.log(error);
                        driver.close();
                    });
                }
                if (linearr[6].length > 1) {
                    query = `match (n:${linearr[0]} {id:${linearr[1]}}) merge (q:question{value:"${linearr[4]}"})  merge (q)-[:${linearr[3]}]->(n)  merge (b:blog{value:"${linearr[6]}"}) merge (q)-[:answer{rating:0}]->(b)`;
                    session.run(query).then(function(result) {
                        session.close();
                        //  console.log(query);
                        // console.log(result);
                        driver.close();
                    }).catch(function(error) {
                        //  console.log(query);
                        // console.log(error);
                        driver.close();
                    });
                }
                if (linearr[7].length > 1) {
                    query = `match (n:${linearr[0]} {id:${linearr[1]}}) merge (q:question{value:"${linearr[4]}"})   merge (q)-[:${linearr[3]}]->(n)  merge (v:video{value:"${linearr[7]}"}) merge (q)-[:answer{rating:0}]->(v)`;
                    session.run(query).then(function(result) {
                        session.close();
                        //  console.log(query);
                        // console.log(result);
                        driver.close();
                    }).catch(function(error) {
                        //  console.log(query);
                        // console.log(error);
                        driver.close();
                    });
                }

            }

        }
    });

    rd.on('close', function() {});

 }
