var message = 'Global Message'
var obj = {
  name: 'hello'
}
function bar () {
  console.log('bar function')
  var address = 'bar'
}
function foo (num) {
  var message = 'Foo Message'
  bar()
  var age = 10
  var height = 1.88
  console.log('foo function')
}
foo(123)