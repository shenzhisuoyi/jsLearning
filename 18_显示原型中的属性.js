function Person () {

}
var prototype = Person.prototype
console.log(prototype);
console.log(prototype.constructor);
console.log(prototype.constructor === Person); // true