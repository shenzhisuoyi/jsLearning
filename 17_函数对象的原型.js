function Student (name, age, sno) {
  this.name = name
  this.age = age
  this.sno = sno

  // 方式1：编写函数，会创建很多函数对象
  this.running = function () {
    console.log(this.name + 'running');
  }
  this.eating = function () {
    console.log(this.name + 'eating');
  }
}

// 方式2：
// 当多个对象拥有共同的值（一般是函数）时，可以将这些值放到构造函数对象的显式原型上，
// 这样由构造函数创建出来的所有对象，都会共享这些属性。
Student.prototype.running = function () {
  console.log(this.name + 'running');
}
Student.prototype.running = function () {
  console.log(this.name + 'running');
}

var stu1 = new Student('why1', 18, 111)
var stu2 = new Student('why2', 18, 112)
var stu3 = new Student('why3', 18, 113)

// 隐式原型的作用：
// 1.stu1的隐式原型是Student.prototype对象
// 2.stu1.running查找：
//  先在自己身上查找，没有找到
//  去原型上查找
stu1.running()