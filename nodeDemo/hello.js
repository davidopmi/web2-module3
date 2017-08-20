// var catMe = require("cat-me") ; 
// console.log(catMe('approaching')); 

// var knockJocks = require("knock-knock-jokes");
// console.log(knockJocks());

//I am at hello.js, how to use a function defined in person.js???
var person = require("./person.js"); 
console.log(person) ;
var davidObj = new person("david", "yang") ;
davidObj.sayHi() ; 


