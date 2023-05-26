// 1.定义构造函数
function Person (name, age) {
  this.name = name
  this.age = age
}

// 3.给函数原型添加方法
Person.prototype.running = function () {
  console.log('running');
}

// 2.使用new创建对象
var p1 = new Person('why', 18)
var p2 = new Person('why1', 19)

// 4.获取属性
console.log(p1.name);
console.log(p2.name);
p1.running()
p2.running()

// 5.新增属性
Person.prototype.address = '中国'
p1.__ptoto__.info = '卷王'

p1.height = 1.88
p2.isAdmin = true

// 6.新增属性后获取属性
console.log(p1.address);
console.log(p2.isAdmin);
console.log(p1.isAdmin);
console.log(p2.info);

// 7.修改属性的值并获取
p1.address = '地球'
console.log(p2.address);