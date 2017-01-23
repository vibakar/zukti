var express = require('express');
var request = require('tinyreq');
var cheerio = require('cheerio');
var app = express();

var allData=[];
var baseUrl = 'https://facebook.github.io';

app.get('/aa', function(req, res) {

    var data = [];
     allUrls(res,'https://facebook.github.io/react/docs/hello-world.html',urlsCallBack);
    console.log('hii');
    res.send(allData);
});

var getAllData=function getData(res,url,dataCallBack) {

    request(url, function(err, body) {
        var h2 = [];
        var process;
        let $ = cheerio.load(body);
        $('h2').each(function(i, element) {
            h2[i] = {};
            h2[i].heading = $(this).text();
            h2[i].content = '';
            h2[i].code='';
            // to extract all para till next heading
            $(this).nextUntil('h2').each(function(j, e) {
                if (e.name == 'p') {
                    h2[i].content += $(this).text();
                }
                if(e.name =='div'){
                  if($(this).hasClass('highlight')){
                    var pre=$(this).children();
                    var code=$(pre[0]).children();
                    $(code).children().each(function(k,elem){
                      if(elem.name=='span'){
                        h2[i].code+=$(this).text();
                      }
                    })
                  }
                }
            });
        })
        dataCallBack(res,h2);
    })
}


var allUrls = function getUrls(res,url,urlsCallBack) {
    request(url, function(err, body) {
        if (err) {
            console.log("Error in reading the url");
        }
        let $ = cheerio.load(body);
        var urls = [];
        $("a[href^='/']").each(function() {
            urls.push('https://facebook.github.io' + $(this).attr('href'));
        });
        urlsCallBack(res,urls);
    });
}

function urlsCallBack(res,urls){
  urls.forEach(function(url){
  getAllData(res,url,dataCallBack);
  console.log(url);
});
}
function dataCallBack(res,data){
  console.log("****************************************************************************");
  console.log(data);
  allData.push(data);
  console.log('******************************************************************************');
}

module.exports = app;
