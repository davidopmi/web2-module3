function Person(firstName, lastName){
    this.firstName = firstName ; 
    this.lastName = lastName ; 
    this.sayHi = function(){
        console.log("hello, I am "+ this.firstName + this.lastName); 
    }
}
//***** you need to expose to outside 
module.exports = Person; 
