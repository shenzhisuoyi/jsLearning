var n = 100
function foo () {
  console.log(n)
  var n = 200
  console.log(n)
}
foo()

// 第一次打印：-> undefined
// 在foo函数的AO对象有n，在赋值前访问则为undefined
// 第二次打印：-> 200
// 在foo函数的AO对象有n，在赋值后访问则为200