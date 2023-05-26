function mixinAnimal (BaseClass) {
  return class extends BaseClass {
    eating () {}
  }
}

function mixinRunner (BaseClass) {
  return class extends BaseClass {
    running () {}
  }
}

class Bird {
  flying () {}
}

class NewBird extends mixinAnimal(mixinRunner(Bird)) {
}

var newBird = new NewBird()
newBird.running()
newBird.eating()
newBird.flying()