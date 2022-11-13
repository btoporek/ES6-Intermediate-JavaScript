// TEMPERATE LITERALS

let multilineTemplate = `This is the first line
This is the second line
This is the third line
This is the end.`;

console.log(multilineTemplate);

let herName = "Abby";
let todayDate = new Date();

console.log(`Hi ${herName}, today is ${todayDate}.`);

let birthdate = new Date(1990, 06, 09);
console.log(`My birthdate is ${birthdate}.`);

// ARROW FUNCTIONS
// jsdoc - documention for functions and classes
/**
 *
 * @param {Number} number
 * @param {Number} divisor
 * @returns {Boolean} True if equally divisible, false if otherwise.
 */
// function isDivisibleBy(number, divisor) {
//   return number % divisor === 0;
// }

// function with arrow
const isDivisibleBy = (number, divisor) => number % divisor === 0;

console.log(`7 is divisible by 2: ${isDivisibleBy(7, 2)}`);
console.log(`14 is divisible by 7: ${isDivisibleBy(14, 7)}`);

const isPrimeNumber = (number) => {
  for (let i = 2, max = Math.sqrt(number); i <= max; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
  console.log(`${number} isPrime: ${isPrimeNumber(number)}`);
}

// CALLBACKS
console.log("Put food in the oven.");
setTimeout(() => {
  // setTimeout takes a function
  console.log("done cooking!");
  console.log("Take out of oven...");
}, 3000); // 3 secs = 3000 ms delay before running
console.log("Ready to eat!!");

/* Above code demonstrates that code is asynchronous, 
the above prints the following:
Put food in the oven.
Ready to eat!!
done cooking!
Take out of oven...
*/

/* examples of asynchronous:
Make a request to a website, that server is taking the time to respond.
While waiting for response, it is determined what it will do when responding.
*/

// const https = require("node:https");
// const baseUrl = "https://restcountries.com/vs.1";
// const defaultFields = "fields=cca2, name, capital, population";

// /**
//  *
//  * @param {*} countryCode  The unique ISO code for the country
//  * @param {*} callback The function to call when results are retrieved
//  */
// function getCountry(countryCode, callback) {
//   let url = `${baseUrl}/alpha/${countryCode}`;
//   console.log("Sending request to: " + url);
//   https
//     .get(url, (res) => {
//       // console.log(res);

//       res.setEncoding("utf8");
//       res.on("data", (chunk) => (content += chunk));
//       res.on("end", () => {
//         let json = JSON.parse(content);
//         callback(json);
//       });
//     })
//     .end();
// }
// getCountry("US", (country) => {
//   console.log(country);
//   // [US] United States of America (population)
//   console.log(
//     `[${country.cca2}] ${country.name.official} ${country.population}`
//   );
// });

//PROMISES
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const baseUrl = "https://restcountries.com/vs.1";
const defaultFields = "fields=cca2, name, capital, population";

/**
 * Retrieves all the available countries.
 * @param {function} callback  The method to invoke when countries are available
 */
function getAllCountriesCallback(callback) {
  let url = `${baseUrl}/all?${defaultFields}`;
  console.log("Sending request to url: " + url);
  fetch(url).then((res) => {
    res.json().then((json) => {
      console.log("Request ended.");
      callback(json);
    });
  });
}

/**
 * Retrieves all the available countries.
 * @param {function} callback  The method to invoke when countries are available
 */
function getAllCountries() {
  let url = `${baseUrl}/all?${defaultFields}`;
  console.log("Sending request to url: " + url);
  return fetch(url).then((res) => {
    return res.json();
  });
}

getAllCountriesCallback((countries) => {
  //console.log(countries);
  for (let country of countries) {
    console.log(
      `[${country.cca2}] ${country.name.official} ${country.population}`
    );
  }
});

getAllCountries().then((countries) => {
    for(let country of countries.sort) {
    console.log(
      `[${country.cca2}] ${country.name.official} (${country.population})`
    );
  });
});
