//1: set up app
var express = require("express") ; 
var app = express();


//2: set up routes
app.get('/', function(req,res){
   res.send('welcome to my assignments...') ;  
});

// /speak/pig
app.get('/speak/:animal', function(req,res){
    var animalVal = req.params.animal ; 
    var msg = "" ; 
    switch (animalVal) {
        case 'cow':
            msg ="the cow says...." ; 
            break;
        case 'dog' : 
            msg ="the dogs says...." ; 
            break; 
        case 'pig' : 
            msg="the pig says....." ; 
            break; 
        default:
            msg ="others...." ; 
    }
    res.send(msg) ; 
});

// /repeat/:something/:times 
// all the params value are string..... 
app.get('/repeat/:something/:times', function(req, res) {
    var msg = req.params.something ; 
    var timeStr = req.params.times ; 
    //===== pay special attention here 
    var times = parseInt(timeStr) ; 
    var content = "" ; 
    for(var i=0; i<times; i++){
        content +=msg ; 
    }
    res.send(content);
}); 


//==== * route matcher
app.get('*', function(req, res) {
   res.send("sorry, page is under construction....") ;  
});

//3: start the server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is up.../");
})