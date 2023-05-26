function createAdder (count) {
  function adder (num) {
    return count + num
  }
  return adder
}
var adder5 = createAdder(5)
adder5(100)
var adder8 = createAdder(8)
adder8(22)

adder8 = null



