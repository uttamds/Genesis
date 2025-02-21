ES6 (ECMAScript 2015) and later versions introduced many new features to JavaScript. Here are some key features from ES6 and beyond:

1. Variable Declarations
	•	let and const (Block-scoped variables)

let x = 10; // Can be reassigned
const y = 20; // Cannot be reassigned



2. Template Literals
	•	String interpolation using backticks (``)

let name = "Alice";
console.log(Hello, ${name}!);



3. Arrow Functions
	•	Concise function syntax

const add = (a, b) => a + b;



4. Default Parameters
	•	Setting default values in function parameters

function greet(name = "Guest") {
  console.log(Hello, ${name});
}



5. Destructuring Assignment
	•	Extract values from arrays or objects

let [a, b] = [10, 20]; // Array destructuring
let { name, age } = { name: "John", age: 30 }; // Object destructuring



6. Spread and Rest Operators (...)
	•	Spread (...) expands arrays/objects

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]


	•	Rest (...) collects arguments

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10



7. Modules (import / export)
	•	Import and export functions, objects, or classes

// Export
export const name = "Alice";

// Import
import { name } from './module.js';



8. Classes and Inheritance
	•	ES6 class syntax

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(Hello, my name is ${this.name});
  }
}



9. Promises (Async Programming)
	•	Handle asynchronous operations

let fetchData = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data loaded"), 1000);
});

fetchData().then(console.log);



10. Async/Await (ES8 - ECMAScript 2017)
	•	Simplifies asynchronous code

async function fetchData() {
  let data = await fetch("https://api.example.com/data");
  let result = await data.json();
  console.log(result);
}



11. Optional Chaining (?.) (ES11 - ECMAScript 2020)
	•	Avoids errors when accessing deeply nested properties

let user = { profile: { name: "Alice" } };
console.log(user.profile?.name); // Alice
console.log(user.address?.street); // undefined



12. Nullish Coalescing (??) (ES11 - ECMAScript 2020)
	•	Returns right-hand value only if left-hand is null or undefined

let username = null;
console.log(username ?? "Guest"); // Guest



Would you like examples for any specific feature?
