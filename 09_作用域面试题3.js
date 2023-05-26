var n = 100
function foo1 () {
  console.log(n)
}
function foo2 () {
  var n = 200
  console.log(n)
  foo1()
}
foo2()

// ->200
// 先执行foo2，foo2作用域中有n，赋值后访问则为200
// ->100
// 后执行foo1，foo1作用域中没有n，则按作用域链访问到GO中的n为100
