//1: set up app 
var express = require("express");
var app = express() ; 

//2: set up the routes : home routes and about route 

//=== use pattern  /animal/:animalName
app.get('/animal/:animalName', function(req, res) {
    var params = req.params; 
    console.log(params); 
    res.send("you are searching for" + params.animalName) ; 
    // based on the req, go to database get the data
    
    // compile the response 
    
});
//  /movies/spain/happyDay
app.get('/movies/:country/:movieName', function(req, res) {

    //1: get the param     
    /*
        {
            country:"span",
            movieName : "happyDay"
        }
    */
    var params = req.params ;   
    console.log(params) ; 
    res.send("you are searching for" + params.movieName) ; 
}); 


app.get('/', function(req,res){
    res.send("this is home page");
}); 
app.get('/about', function(req,res){
   res.send("this is the about page") ;  
});
//the * route matcher: put it after other routes!!!
app.get('*', function(req, res) {
    res.send('this is the * page') ; 
}); 

//3: start your server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is up..."); 
});

