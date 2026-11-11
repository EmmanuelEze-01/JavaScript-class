//JSON = (Jabascript  Object Notation) data-interchange format used for exchanging
//          data between a server and a web application
//          JSON files {key : value} OR {value1, value2, value3}

//          JSON.stringify() = convert a JS object to a JSON string
//          JSON.parse() = convert a JSON string to a JS object

// JSON stands for JavaScript Object Notation.

// That sounds complicated, but the idea is simple:

// JSON is a way of organising data into a format that computers can easily read and exchange.

// Imagine you're registering a student at a school. You need to store information about that student.

// You could write it like this:
// -Name: Samuel
// -Country:

const fruits = ["apple", "banana", "papaya"];
const fruitsToJson = ["apple", "banana", "papaya"];
console.log(fruits);
console.log(JSON.stringify(fruitsToJson));

// console.log(fruitsToJson)

const names = '["Jake", "Micheal", "Stephen", "Bob"]';
console.log(names);
console.log(JSON.parse(names));

ids = [
  {
    name: "Emmanuel",
    age: 15,
  },
  {
    name: "Wealth",
    age: 15,
  },
  {
    name: "Mayor",
    age: 15,
  },
];

console.log(ids[0].name);
console.log(ids[1].name);
console.log(ids[2].name);
