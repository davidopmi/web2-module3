var express = require("express"); 
var app = express(); 


//set up the route
/* parameter /animal/dog1
/animal/dog2
/animal/dog3
/animal/dog4
*/
// /animal/panda 
app.get('/animal/:name', (req,res)=>{
    var name  = req.params.name ; 
    res.send("you are trying to visit " + name) ; 
}); 

app.get('/about', function(req,res){
    res.send('hey, who are you??') ; 
}); 

//ES6 arrow function 
app.get('/greet', (req,res)=>{
    res.send("this is greet"); 
}); 

// "*"
app.get("*", function(req,res){
    res.send("site under construction") ; 
}) ; 

//start up your server
app.listen(process.env.PORT, process.env.IP, 
function(){
    console.log("server is up...") ; 
})