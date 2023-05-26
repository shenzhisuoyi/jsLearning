var obj = {
  name: 'why',
  age: 18
}

// 等价于
// var obj = new Object()

console.log(obj.__proto__);
console.log(obj.__proto__.__proto__); // null