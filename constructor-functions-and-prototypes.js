// ## Constructor Functions & Prototype
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);

  this.getBirthYear = function() {
    return this.dob.getFullYear();
  }
  this.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
  }

  Person.prototype.getBirthMonth = function() {
    return this.dob.getMonth();
  }

}

// Instantiate Object
const person1 = new Person('John','Smith', '1980-12-1');
const person2 = new Person('Mary','Sue', '1990-2-25');

console.log(person1);
console.log(person2.firstName);
console.log(person2.dob.getFullYear());

// Adding Custom Methods
// Note the additional 'getBirthYear' method function above.
console.log(person1.getBirthYear());
console.log(person1.getFullName());

// Adding a Prototype
// Prototype allows you to add new methods and properties to objects constructors.
// Note the additional prototype property in the 'Person' function above.
console.log(person1);
