var http = require("http"); 

//using built in http module to create and start a server!!1
http.createServer(function(req,res){
    
    // normalize url by removing querystring, optional
// trailing slash, and making it lowercase
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase(); 
    switch(path) { 
        case '':
            res.writeHead(200, { 'Content-Type': 'text/plain' }); 
            res.end('Homepage');
            break; 
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' }); 
            res.end('About');
            break; 
        default:
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.end('<h1>NOT FOUND!</h1>')
            // res.writeHead(404, { 'Content-Type': 'text/plain' }); 
            // res.end('Not Found');
            break; 
        }
}).listen(process.env.PORT, process.env.IP, function(){
   console.log("yeah.. my server is up!"); 
});