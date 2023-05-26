function foo () {
  var a = b = 100
}
foo()
// console.log(a)
console.log(b)

// ->报错：a is not defined。
// a只在foo的作用域里
// ->100
// b没有使用var关键字定义，则为全局变量，定义在GO中