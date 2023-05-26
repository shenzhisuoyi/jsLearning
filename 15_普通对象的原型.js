let obj = { name: 'why' }
console.log(obj.message) // undefined
obj.__proto__.message = 'hello'
console.log(obj.message) // hello