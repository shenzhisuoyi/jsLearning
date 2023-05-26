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

Student.prototype.running = function () {
  console.log('running');
}
Student.prototype.eating = function () {
  console.log('eating');
}
Student.prototype.studying = function () {
  console.log('studying');
}

// 创建学生
var stu1 = new Student('why', 18, 111, 100)
stu1.running()