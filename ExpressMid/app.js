var express = require("express") ; 
var path = require("path") ; 
var app = express() ; 
var bodyParser = require("body-parser") ; 

// settings for EJS
app.set("view engine", "ejs") ; 
/* by default ejs goto a folder named views to look for ejs file
to make sure it goes to the right direction, we set definition of views
= current directory's views 
*/
app.set("views", path.resolve(__dirname, "views")) ; 

//=== settings for static files(css, js)
app.use(express.static("public")); 


//==== settings for bodyParser
app.use(bodyParser.urlencoded({extended:true}));


//===== for post request ==== 
var friends = ["david", "jack", "lee"] ;  

app.get('/friends', (req,res)=>{
    res.render("friends.ejs" , {
        friends:friends 
    })
}); 
/*
post request: data is at req.body
*/
app.post("/addFriend", (req,res)=>{
     console.log("THE req.body is: " + req.body) ; 
    var newFriend = req.body.friendName ; 
    friends.push(newFriend) ; 
    res.redirect("/friends"); 
}); 


/*
book : {
    bookName:"book1",
    author: "david"
}
*/
var books = [{
    bookName:"book1",
    author: "david"
},{
    bookName:"book2",
    author: "jack"
},{
    bookName:"book3",
    author: "lee"
}] ; 

// /books 
app.get("/books", (req,res)=>{
   res.render("books", {
       books:books
   }); 
 
});


/*
why you should use EJS: 
1: write html
2: dynamic page 
which allows you to embed JS(variable and function) into HTML
create /views folder and put test.ejs there... 

1: npm install --save ejs
2: res.render("test.ejs") 
*/
// /animal/panda 
/*
   panda: cute panda
   dog: dog bark 
   snake: scary snake
*/
app.get('/animal/:name', (req,res)=>{
   var name = req.params.name ; 
   res.render("test.ejs",{name: name } );
   
});


app.get('/test', (req,res)=>{
   res.render("test"); 
});



//set up route
app.get('/about', (req,res)=>{
    var content = "" ; 
    content += "<h1>this is about</h1>" ; 
    content += "<p>how are you??</p>"  ; 
    res.send(content);
}); 


//start your server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is up...") ; 
}); 
