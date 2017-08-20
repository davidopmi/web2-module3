/*
nodejs itself has lots of modules built in 
*/
var urls = require("url") ; 
var urlStr = urls.parse("http://www.google.com:8080/weather?q=nyc") ; 
console.log(urlStr.hostname) ; 
console.log(urlStr.protocol) ;
console.log(urlStr.port)
console.log(urlStr.pathname);
console.log(urlStr.query); 

