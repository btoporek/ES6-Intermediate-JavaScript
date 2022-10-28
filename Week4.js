// ES6 VARIABLES

var x = 10;
{
  let x = 2; // variable created locally within {}
}
console.log(x); // prints 10 because of global variable
// these variables can be changed accidentally

const pi = 3.14159; // sets variable permanently, cannot be changed later

console.log(pi);
// const variables prevent accidental changes

// --------------------------------------------------------------------------------------------------

// TEMPERATE LITERALS
// declared just like strings but in back ticks ``

let myString = `Hello
world
my name
is Brittni.`; // temperate literal will take into account spaces and line formatting

console.log(myString); // prints below statement formatted:
/* Hello
world
my name
is Brittni. */

// temperate literals also allows interpolation to include strings and variables within one statement using ${} for insterting variables

console.log(`Six times five = ${6 * 5}.`);
// Prints: Six times five = 30.

// --------------------------------------------------------------------------------------------------

// ARROW FUNCTION
//Traditional function
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fullName("Mike", "Toporek"));

// Function with arrow function
const createFullName = (firstName, lastName) => `${firstName} ${lastName}`; // implicitly return; does not need return keyword

console.log(createFullName("Brittni", "Toporek"));

// Using arrow function with return keyword and more than one line
const someFunction = (a, b) => {
  let result = "";
  for (let i = 0; i < b; i++) {
    result += a;
  }
  return result;
};
console.log(someFunction("Hello", 3));

// Using arrow function with 1 parameter, you do not need parentheses;
// having 0 parameters or more than 1 parameter, you need parentheses

// Best practice is to use const with arrow function

// --------------------------------------------------------------------------------------------------

// CALL BACKS: When we pass a function into another function
// to be executed after that code is complete, so there is no delay.
/*
function logUsername(user) {
  console.log(user);
}
sendHttpRequest(
  "getUser",
  logUsername
);
*/
/* logUsername function is passed [not invoked so don't add ()] 
into the sendHttpRequest function (outside source) as an argument, 
the outside source then makes a call to the logUsername and passes the 
username from that source into it.
Example: request to outside source => outside source grabs username => sends call back to function logUsername => passes that username into the function */

// sendHttpRequest("getUser", (user) => console.log(user));
/* Creates anonymous function because we didn't assign a name to the function, 
it is just using an arugment in this one call; if we reused it, 
we'd want to give it a name like the above example. */

// --------------------------------------------------------------------------------------------------

// PROMISES
/* Sometimes call backs are not always the best option, so we use promises. 
They are cleaner to write and easier to read. 
They are an object that represents the eventual completion or failure of an asynchronous operation, 
which means asynchronous operations can return a promise and say when this resolves or finishes, 
do something if it was successful, or do something else if it was not successful. */

/* Examples of promises below:
doSomethingThatReturnsAPromise() //this calls the function that returns the promise (from different libraries learned later)
    .then((value => { // .then says if successful, this is what to do; in this example it gives back a value
        console.log(value);
    })).catch((err) => { // .catch says if there is an error, then print back there is an error
        console.logerror(err);
    })

    // Another example using functions to determing if successful or not; used within promise to call the functions
    function handleEvent(value){
        console.log(value);
    }
    
    function handleError(err){
        console.log(err);
    }

    do doSomethingThatReturnsAPromise()
        .then(handleEvent) // pull above function to run if successful
        .catch(handleError); // pulls above function to run if there is an error
        */

// --------------------------------------------------------------------------------------------------

// OPEN CLASS - ARROW FUNCTIONS

/* 1. Convert the following function myFunction into an arrow function. 
Refer to the new function as revert.

function myFunction(value){ return !value; }
*/

let revert = (value) => !value;
// variable name = parameter => implicit return statement

console.log(revert(1)); // prints false

/* 2.Convert the following function myFunction into an arrow function. 
Refer to the new function as pythagoras.

function myFunction(num1, num2) { return Math.sqrt((num1*num2)+(num2*num2)); } 
*/
let c = 4;
let d = 7;

const pythagoras = (num1, num2) => Math.sqrt(num1 * num2 + num2 * num2);

console.log(pythagoras(c, d));

/* 3. Convert the following function addTwoInputs into an arrow function.
Refer to the new function as returnSum.

function addTwoInputs(a,b) { return a+b; }
*/

const returnSum = (c, d) => c + d;

console.log(returnSum(c, d));

/* 4. Convert the following function myFunction into an arrow function.
Refer to the new function as monthlyPayment.
function myFunction(yearlyPayment){
    let monthly = yearlyPayment / 12;
    return monthly.toFixed(2);
}
*/

const monthlyPayment = (yearlyPayment) => {
  let monthly = yearlyPayment / 12;
  return monthly.toFixed(2);
};
console.log(monthlyPayment(48000));

// Mastery achieved!

// Additional Pratice:
/* 5. Convert the following function myFunction into an arrow function.
Refer to the new function as fancyAlgorithm.
function myFunction(num1, num2, num3) {
    let value = 0;
    for(let i= 0; i< num3; i++){
        value = (value + num2) * num1;
    }
    return value / (num1* (num3 *10));
}
*/

const fancyAlgorithm = (num1, num2, num3) => {
  let thisValue = 0;
  for (let i = 0; i < num3; i++) {
    thisValue = (thisValue + num2) * num1;
  }
  return thisValue / (num1 * (num3 * 10));
};

console.log(fancyAlgorithm(15, 12, 13));

/* 6. Convert the following function myFunction into an arrow function.
Refer to the new function as returnSquareRoot.

function myFunction(num) { return Math.sqrt(num); }
*/

const returnSquareRoot = (num) => Math.sqrt(num);

console.log(returnSquareRoot(4));

/* 7. Convert the following function myFunction into an arrow function.
Refer to the new function as returnNumber.

function myFunction(num) { return `Your number is ${num}` ; }

Note: The returned value is a template literal. Remember to use backticks.
*/
const returnNumber = (num) => `Your number is ${num}`;

console.log(returnNumber(15));

/* 8. Convert the following function myFunction into an arrow function. Refer to the new function as xor

function myFunction(num1, num2){
    return num1 ^ num2;
}
The bitwise XOR operator (^) returns a 1 in each bit position for 
which the corresponding bits of either but not both operands are 1s.
*/

const xor = (num1, num2) => num1 ^ num2;

console.log(xor(5, 3));

// END OPEN CLASS

// Additional practice with arrow functions, temperate literals, and array methods
// USING .forEach()
const fruits = ["mango", "papaya", "pineapple", "apple"]; //array of fruits

// Iterate over fruits below
fruits.forEach((fruitToEat) => console.log(`I want to eat a ${fruitToEat}`));
// .foreach loops through fruits array; then calls a function to print 'I want to eat a' with each fruit in array

const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];

v; // USING .map()
// Create the secretMessage array below
const secretMessage = animals.map((animal) => {
  // .map creates new array with function to loop through and do below
  return animal[0]; //returns the first character of each element looped through
});

console.log(secretMessage.join("")); // joins the first characters all together, prints HelloWorld

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map((num) => num / 100); // .map creates new array with function to divide elements by 100
console.log(smallNumbers); // prints new array [1, 2, 3, 4, 5]

// USING .filter()
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers1 = randomNumbers.filter((num) => num < 250); // uses .filter() to create new array with numbers less than 250
console.log(smallNumbers1);

const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];
// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter((word) => {
  // ises .filter() to create new array with word with more than 7 characters
  return word.length > 7;
});
console.log(longFavoriteWords);

// USING .findIndex()

const animals1 = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = animals1.findIndex((word) => {
  // uses .findIndex to call function looking for index of element with "elephant"
  return word === "elephant";
});
console.log(foundAnimal); // prints index location of 7
console.log(animals1[7]); // looks for element at index 7 and prints elephant

const startsWithS = animals1.findIndex((animal) => {
  // uses .findIndex to call function looking for index of element starting with 's'
  return animal.charAt(0) === "s";
});
console.log(startsWithS); // prints index location of 3
console.log(animals1[3]); // looks for element at index 3 and prints seal

// USING .reduce()
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  // uses .reduce method to call a function
  // accumulator = the number to start from (will change if added); currentValue = the number to be used next in array
  console.log(`The value of accumulator: ${accumulator}`); // prints what the accumulator is through each loop
  console.log(`The value of currentValue: ${currentValue}`); // prints the currentValue through each loop
  return accumulator + currentValue; // tells function to add these values as it loops
}, 10); // 10 is a second argument that changes the starting number to 10
console.log(newSum); //prints new number created from the loop adding all the above values; prints 26

// Finding errors practice
const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];

// Something is missing in the method call below
// Solution: Needed the paramter word
console.log(
  words.some((word) => {
    return word.length < 6;
  })
);

// Use filter to create a new array
const interestingWords = words.filter((word) => {
  return word.length > 5;
});

// Make sure to uncomment the code below and fix the incorrect code before running it
// ORIGINAL: console.log(interestingWords.every((word) => { } ));

console.log(
  interestingWords.every((word) => {
    return word.length > 5;
  })
);

// METHOD REVIEW
const cities = [
  "Orlando",
  "Dubai",
  "Edinburgh",
  "Chennai",
  "Accra",
  "Denver",
  "Eskisehir",
  "Medellin",
  "Yokohama",
];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach((city) => console.log("Have you visited " + city + "?")); // .forEach()

// Choose a method that will return a new array
const longCities = cities.filter((city) => city.length > 7); // .filter()

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  //.reduce()
  return acc + currVal[0];
}, "C");

console.log(word);

// Choose a method that will return a new array
const smallerNums = nums.map((num) => num - 5); // .map()

// Choose a method that will return a boolean value
nums.every((num) => num < 0); // .every()

/*
1) .forEach() is used to execute the same code on every element in an array but 
    does not change the array and returns undefined.
2) .map() executes the same code on every element in an array and returns a new array 
    with the updated elements.
3) .filter() checks every element in an array to see if it meets certain criteria 
    and returns a new array with the elements that return truthy for the criteria.
4) .findIndex() returns the index of the first element of an array that satisfies 
    a condition in the callback function. It returns -1 if none of the elements in 
    the array satisfies the condition.
5) .reduce() iterates through an array and takes the values of the elements and 
    returns a single value.
6) All iterator methods take a callback function, which can be a pre-defined function, 
    a function expression, or an arrow function.
*/
