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
  // this.name = name
  // this.age = age
  // 在`子类构造函数`的内部调用`父类构造函数`
  Person.call(this, name, age)
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