# Javascript Basics Review

## Variables
### var, let, const
* 'let' variables can be readily reassigned or their values change.
* 'const' variables cannot be reassigned and are constant.


## Data Types
### String, Numbers, Boolean, Null, undefined

```
const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;

let z;

// To Test
console.log(typeof name);
```


## Strings & String Methods
### Strings
```
const name = 'John';
const age = 30;

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template Strings
console.log(`My name is ${name} and I am ${age}`);
// or
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);
```
### String Properties and Methods
```
const s = 'Hello World!';

// Getting the 'length' property or the number of characters in a string.
console.log(s.length);

// Change all letters to uppercase or lowercase
console.log(s.toUpperCase());
console.log(s.toLowerCase());

// Extracting a specific text in a string.
console.log(s.substring(0,5));

// Combine substring method with uppercase method.
console.log(s.substring(0,5).toUpperCase());

// Split a string into an array.
console.log(s.split(''));

// Split strings with commas into an array.
const group = 'technology, computers, IT, code';
console.log(group.split(', '));
```


## Arrays - Variables that hold multiple values

```
// Javascript arrays can iclude different data types.

// Using 'new' constructor to create an array.
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

// Another way to create an array.
const fruits = ['apples','oranges','pears'];
console.log(fruits);

// Output only a specfic item (e.g. orange) in an array.
console.log(fruits[1]);

// Adding another item in an array.
fruits[3] = 'grapes';
console.log(fruits);

// Adding an item in the end of an array.
fruits.push('mangoes');
console.log(fruits);

// Adding an item in the beginning of an array.
fruits.unshift('strawberries');
console.log(fruits);

// Remove the last entry in an array.
fruits.pop();
console.log(fruits);

// How to check if a variable is an array.
console.log(Array.isArray(fruits)); // Output is TRUE.
console.log(Array.isArray('hello')); // Output is FALSE.

// How to get the index of an item in an array.
console.log(fruits.indexOf('oranges'));
```


## Object Literals / Key-Value Pairs
```
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 main st',
    city: 'Boston',
    state: 'MA'
  }
}

// Output 2 values using keys.
console.log(person.firstName, person.lastName);

// Output a specific in a key array.
console.log(person.hobbies[1]);

// Output a value within an object.
console.log(person.address.city);

// How to create variables from objects. Also called 'destructuring'.
const {firstName, lastName, address: {city}} = person;
console.log(firstName);

// Another example of 'destructuring'.
console.log(city);

// How to add properties.
person.email = 'john@gmail.com';
console.log(person);
```


## Arrays of Objects & JSON
```
// Create an arrays of objects
const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Meeting with bosss',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Dentist appointment',
    isCompleted: false
  },
];

console.log(todos);

// Output a value from the arrays of objects.
console.log(todos[1].text);

// Converting an arrays of objects to JSON. This is how we are going to send data to a server.
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
```


## Loops
### FOR Loop
```
for(let i = 0; i < 10; i++){
  console.log(`For Loop Number: ${i}`);
}
```

### WHILE Loop
```
let i = 0;
while(i < 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

// Looping thru arrays
const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Meeting with bosss',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Dentist appointment',
    isCompleted: false
  },
];

for(let i = 0; i < todos.length; i++){
  console.log(todos[i].text);
}

// Another method for FOR looping thru arrays.
for(let todo of todos){
  console.log(todo.text);
}
```


## High Order Array Methods
### Using forEach, map, filter
```
const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Meeting with bosss',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Dentist appointment',
    isCompleted: false
  },
];


// forEach
todos.forEach(function(todo){
  console.log(todo.text);
});

// map
const todoText = todos.map(function(todo){
  return todo.text;
});

console.log(todoText);

// filter
const todoCompleted = todos.filter(function(todo){
  return todo.isCompleted === true;
});

console.log(todoCompleted);

// Combination of 'map' and 'filter'.
const todoCompleted2 = todos.filter(function(todo){
  return todo.isCompleted === true;
}).map(function(todo){
  return todo.text;
});

console.log(todoCompleted2);
```


## Conditionals
### IF ELSE
```
const x = '10';

if(x == 10) { // Using '==' we can still match string to number however if we use '===', this will match also the data type which will return false.
    console.log('x is 10');
} else {
    console.log('x is NOT 10');
}
```

### ELSE IF
```
const y = 20;

if(y === 10) { // Using '==' we can still match string to number however if we use '===', this will match also the data type which will return false.
    console.log('y is 10');
} else if (y > 10) {
  console.log('y is greater than 10');
} else {
  console.log('y is less tha 10');
}
```

### IF ELSE with AND ('&&') and OR ('||')
```
const a = 4;
const b = 10;
```

#### OR example
```
if (a > 5 || b > 10) {
  console.log('a is more than 5 or b is more than 10');
} else if (x > 10) {
  console.log('x is greater than 10');
} else {
  console.log('x is less than 10');
}
```

#### AND example
```
if (a > 3 && b > 9) {
  console.log('x is more than 5 or y is more than 10');
}
```

### Ternary Operator
```
const c = 10;

const color =  c > 10 ? 'red' : 'blue';
console.log(color);
```

### Switch
```
switch(color){
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('color is NOT red or blue');
    break;
}
```


## Functions
```
function addNums(num1, num2){
  console.log(num1 + num2);
}

addNums(5,4);
```

### Functions with Default Values
```
function addNums(num1 = 1, num2 = 2){
  console.log(num1 + num2);
}

addNums();
```

### Overriding Functions with Default Values
```
function addNums(num1 = 1, num2 = 2){
  console.log(num1 + num2);
}

addNums(5,5);
```

### Returning Values from Functions
```
function addNums(num1 = 1, num2 = 2){
  return num1 + num2;
}

console.log(addNums(5,5));
```


## Arrow Functions
```
const addNums = (num1 = 1, num2 = 1) => {
  console.log(num1 + num2);
}

addNums(5,5);
```

### Arrow Function with Single Expression
```
const addNums2 = (num1 = 1, num2 = 1) => console.log(num1 + num2);

addNums2(5,5);
```

### Arrow Function for just returning a value from a Single Expression
```
const addNums3 = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNums3(5,5));
```

### Arrow Function with just One Parameter
```
const addNums4 = num1 => num1 + 5;

console.log(addNums4(5));
```

### Arrow Function with just One Parameter
```
// Need to check this code.
//const addNums5 = num1 => num1 + 5;

//console.log(addNums5(5));

//todos.forEach((todo) => console.log(todo));
```

## Constructor Functions & Prototype
```
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
```

## ES6 Classes
```
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
```


## Window Object, DOM, DOM Selection and Manipulating the DOM
```
// ## Window Object & DOM - Document Object Model

// ELEMENT SELECTORS

// Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container')); // Most used
// Multiple Element Selectors
console.log(document.querySelectorAll('.item')); // Most used
console.log(document.getElementsByTagName('li')); // Least used
console.log(document.getElementsByClassName('item')); // Least used

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));


// MANIPULATING THE DOM
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';
```


## Events
```
// EVENTS

const btn = document.querySelector('.btn');

// Mouse Event
btn.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});

// Keyboard Event
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput.value);
});
```


## Form Script
```
// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
```
