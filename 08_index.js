var message = 'Global Message'
function foo () {
  const name = 'foo'
  function bar () {
    console.log(name)
  }
  return bar
}

var bar = foo()
bar()