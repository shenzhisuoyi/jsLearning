var a = 100
function foo () {
  console.log(a)
  return
  var a = 100
}
foo()

// ->undefined
/// return是代码执行的时候才起作用，在解析阶段有变量a的定义，在执行阶段先访问a，则为undefined
