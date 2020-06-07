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
