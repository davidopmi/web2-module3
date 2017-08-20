//==== section 1: create the app obj ===
var express = require("express") ; 
var app = express();


//====section 2: create the routing =====
// /      : you need to specify the request method: get, post?
app.get('/', function(req,res){
   res.send("welcome to my page!!!");  
});

// /about 
app.get('/about', function(req,res){
    res.send("this is about page"); 
})

//====section 3: start your server ======
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("yeah.. server is up..."); 
});



