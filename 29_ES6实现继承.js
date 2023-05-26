class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  running () {}
}

class Student extends Person {
  constructor(name, age, sno, score) {
    super(name, age)
    this.sno = sno
    this.score = score
  }

  learning () {}
}

class Teacher extends Person {
  constructor(name, age, title) {
    super(name, age)
    this.title = title
  }

  teaching () {}
}
