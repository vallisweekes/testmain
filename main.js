class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const person1 = new Person('Jack', 40, 'trans');

console.log(person1);
// class Animals extends Person {
//   constructor(name, age, gender) {
//     super(tribe);
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.tribe = tribe;
//   }
// }
