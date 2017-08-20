/*to create 10 
product name - $price 
*/
var faker = require('fakers');
for (var i =0 ; i<10; i++ ) {
    var productName = faker.commerce.productName() ; 
    var price = faker.commerce.price() ; 
    console.log(productName + "- $" + price) ;
}

 