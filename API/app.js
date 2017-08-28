var express= require("express");
var app = express() ;
var request = require("request") ; 
//=== set up route 


//get request 
request("https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function(error, response, body){
    if (error) {
        console.log("something is wrong:" + error); 
    } else{
        if (response.statusCode==200) {
            //1: convert JSON string to JS object
            var result = JSON.parse(body) ; 
            //2: find the property value of JS object
            var sunset = result.query.results.channel.astronomy.sunset ; 
            console.log("the sunset time is:" + sunset) ; 
        }
    }
}); 


//=== POST request
var myData = {
    name:"david",
    sex : "male"
}

request({
    url:"http://httpbin.org/post",
    method:"POST",
    json: true,
    body: myData
},function(error, response, body) {
   if(error){
       console.log("something is wrong") ; 
   } else{
       if(response.statusCode ==200){
           console.log(typeof body) ; 
           console.log(body.json.name + body.json.sex) ; 
           //1: convert Json string to JS object
               //var result = JSON.parse(body) ; 
           //2: get the property value of JS object
               //console.log("the name is:" + result.json.name + "the sex is:" + result.json.sex);
       }
   }
});


//start your server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is up...") ;
})
