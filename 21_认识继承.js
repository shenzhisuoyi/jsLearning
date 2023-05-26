function Student (name, age, sno, score) {
  this.name = name
  this.age = age
  this.sno = sno
  this.score = score
}

Student.prototype.running = function () {}
Student.prototype.eating = function () {}
Student.prototype.studying = function () {}

function Teacher (name, age, title) {
  this.name = name
  this.age = age
  this.title = title
}

Teacher.prototype.running = function () {}
Teacher.prototype.eating = function () {}
Teacher.prototype.teaching = function () {}