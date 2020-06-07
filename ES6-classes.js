// ## ES6 Classes
// Class
// We can replace functions using Classes.
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}


// Instantiate Object
const person1 = new Person('John','Smith', '1980-12-1');
const person2 = new Person('Mary','Sue', '1990-2-25');

console.log(person2.getFullName());
console.log(person1);
