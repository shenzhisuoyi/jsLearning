function Person () {

}

// 1.原型对象追加属性
// Person.prototype.message = 'message'
// Person.prototype.info = '卷王'
// Person.prototype.running = function () {}
// Person.prototype.eating = function () {}

// 2.直接赋值一个新的原型对象
Person.prototype = {
  message: 'message',
  info: '卷王',
  running: function () {},
  eating: function () {}
}

Object.defineProperty(Person.prototype, 'constructor', {
  configurable: false,
  writable: false,
  enumerable: false,
  value: Person
})