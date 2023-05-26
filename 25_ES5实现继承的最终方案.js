// 思路
// function Person () {}
// function Student () {}
// var obj = {}
// obj.__proto__ = Person.prototype
// Student.prototype = obj


// 封装成工具函数，最终目的都是使stu对象的原型指向Person对象
// 1.创建对象
// 方案1
function createObject (obj) {
  function F() {}
  F.prototype = obj
  return new F()
}
// 方案2
// function createObject (obj) {
//   var newObj = {}
//   Object.setPrototypeOf(newObj, obj)
//   return newObj
// }
// 方案3：使用Object.create创建子类对象
// var stu = Object.create(Person, {
//   info: {
//     value: '卷王',
//     enumerable: true
//   }
// })

// 2.将subtype和supertype联系在一起
function inherit (Subtype, Supertype) {
  // 方案1
  Subtype.prototype = createObject(Supertype)
  Object.defineProperty(Subtype.prototype, 'construtor', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: Subtype
  })
  // 方案2：有兼容性问题
  // Subtype.prototype.__proto__ = Supertype.prototype
  // 方案3：有兼容性问题
  // Object.setPrototypeOf(Subtype.prototype, Supertype.prototype)
}


function Person () {}
function Student () {}
inherit(Student, Person)