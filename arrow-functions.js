// ## Arrow Functions
const addNums = (num1 = 1, num2 = 1) => {
  console.log(num1 + num2);
}

addNums(5,5);

// ### Arrow Function with Single Expression
const addNums2 = (num1 = 1, num2 = 1) => console.log(num1 + num2);

addNums2(5,5);

// ### Arrow Function for just returning a value from a Single Expression
const addNums3 = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNums3(5,5));

// ### Arrow Function with just One Parameter
const addNums4 = num1 => num1 + 5;

console.log(addNums4(5));

// ### Arrow Function with just One Parameter
// Need to check this code.
//const addNums5 = num1 => num1 + 5;

//console.log(addNums5(5));

//todos.forEach((todo) => console.log(todo));
