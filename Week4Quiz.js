// Quiz

/* 1. Rewrite the following three functions as arrow functions. Make sure to assign them to a const identifier.

function createFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

function doubleNumber(number) {
  return number * 2;
}

function getEvenNumbers(array) {
  let evenNumbers = [];
  for (let i of array) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}
*/
const createFullName1 = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(createFullName1("Ashlee", "Toporek"));

const doubleNumber = (number) => number * 2;

console.log(doubleNumber(4));

const getEvenNumbers = (array) => {
  let evenNumbers = [];
  for (let i of array) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
};

console.log(getEvenNumbers([2]));

/* 2. The product owner on your development team believes they've seen a pattern as to which customers purchase the most socks. To verify, you've been asked to write a function that processes an array of customer objects and return a new array that contains only customers that match ANY of the following criteria:

name starts with a 'C' (upper or lowercase)
address contains no undefined fields
the city is Peoria and the state is AZ
membership level is GOLD or PLATINUM unless the customer is younger than 29, then SILVER is okay too

The array of customer objects will have the following schema:

const customers = [
    {
        name: 'Sam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    },
    //more customers with the same schema
];


Note: The solution to this problem does not require the use of callbacks. You will also need to use dot notation to access the properties. For example, customers[0].name would return "Sam".

*/

const customers = [
  {
    name: "Sam",
    address: {
      street: "1234 W Bell Rd",
      city: "Phoenix",
      zip: "85308",
      state: "AZ",
    },
    membershipLevel: "GOLD",
    age: 32,
  },
  {
    name: "Carrie",
    address: {
      street: "5678 W Lake Pleasant Pkwy",
      city: "Peoria",
      zip: "85383",
      state: "AZ",
    },
    membershipLevel: "GOLD",
    age: 30,
  },
  {
    name: "cory",
    address: {
      street: "512 N Road Street",
      city: "Riverside",
      zip: "92501",
      state: "CA",
    },
    membershipLevel: undefined,
    age: 25,
  },
];
let goodCustomers = [];

let filteredArray = (customerArray) => {
  for (let customer of customers) {
    if (
      customer.address.street !== undefined &&
      customer.address.city !== undefined &&
      customer.address.zip !== undefined &&
      customer.address.state !== undefined
    ) {
      goodCustomers.push(customer);
    } else if (customer.name.toLowerCase().includes("c")) {
      // checks lowercase or uppercase
      goodCustomers.push(customer);
    } else if (
      customer.address.city === "Peoria" &&
      customer.address.state === "AZ"
    ) {
      goodCustomers.push(customer);
    } else if (
      customer.membershipLevel === "GOLD" ||
      customer.membershipLevel === "PLATINUM" ||
      (customer.membershipLevel === "SILVER" && customer.age === 29)
    ) {
      goodCustomers.push(customer);
    } else {
      console.log(`${customer.name} does not meet criteria`);
    }
  }
  return filteredArray;
};
filteredArray(customers);
console.log(goodCustomers);
