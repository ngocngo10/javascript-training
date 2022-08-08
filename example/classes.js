class Person {
  name
}

const flavio = new Person();
flavio.name = 'Ngoc'
console.log(flavio.name);

class SV {
  constructor (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  method1 () {
    console.log(`My name is ${sv1.name}`);
  }
}

const sv1 = new SV('Ngoc', 23, 'female');
sv1.method1();

class HS {
  constructor (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  static method1 () {
    console.log('Hello Ngoc');
  }
}

HS.method1();

// Inherit in class
class Animal {
  constructor (name) {
    this.speed = 0;
    this.name = name;
  }
  run (speed) {
    this.speed = speed;
    console.log(`${this.name}  runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

const animal = new Animal('My animal');
animal.run(100);
animal.stop();

class Rabbit extends Animal {
  hide () {
    console.log(`${this.name} hides!`);
  }
}

const rabbit = new Rabbit('White Rabbit');
rabbit.run(5);
rabbit.hide();