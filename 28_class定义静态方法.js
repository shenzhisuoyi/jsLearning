class Person {
  constructor(name, age) {
    this._name = name
    this.age = age
  }

  static sleeping () {
    console.log('static sleep');
  }
}
var p = new Person('why', 18)
Person.sleeping()