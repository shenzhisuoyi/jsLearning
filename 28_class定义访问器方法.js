class Person {
  constructor(name, age) {
    this._name = name
    this.age = age
  }

  set name (value) {
    this._name = value
  }

  get name () {
    return this._name
  }
}
var p = new Person('why', 18)
p.name = '11'
console.log(p);