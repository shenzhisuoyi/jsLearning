class Person {
	constructor (name, age) {
    this.name = name
    this.age = age
  }
  studying () {
    console.log(this.score);
  }
}

class Student extends Person {
	constructor (name, age, sno, score) {
    super(name, age)
    this.sno = sno
    this.score = score
  }
}
var stu = new Student('why', 18, 111, 100)
stu.studying()