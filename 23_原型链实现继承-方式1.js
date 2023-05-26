function Person (name, age) {
  this.name = name
  this.age = age
}

Person.prototype.running = function () {
  console.log('running');
}
Person.prototype.eating = function () {
  console.log('eating');
}

function Student (name, age, sno, score) {
  this.name = name
  this.age = age
  this.sno = sno
  this.score = score
}

// Student原型直接指向Person原型
// 父类和子类共享一个原型对象，修改了一个，另一个也会被修改
Student.prototype = Person.prototype

// Student.prototype.running = function () {
//   console.log('running');
// }
// Student.prototype.eating = function () {
//   console.log('eating');
// }

// 会改变Person的原型，Person原型对象会变得庞大
Student.prototype.studying = function () {
  console.log('studying');
}

// 创建学生
var stu1 = new Student('why', 18, 111, 100)
stu1.running()