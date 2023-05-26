var n = 100
function foo () {
  n = 200
}
foo()
console.log(n);

// ->200
// 访问全局变量n，并赋值为200