// function = a function is a reusable block of code

// cretaing a function

// function key word
//  function name
//  function task
//function invocation/calling the function

function greet() {
  console.log("Good Day");
}

greet();

function eatFood() {
  console.log("I am eating right now");
}

eatFood();

// function declarations = writing a function without assigning it to a variable
// function expressions = creating a function then assifgning it to a variable
const name1 = function sayName() {
  console.log("james");
};

name1();

// return statement = gives the value
// consle.log = gives the output

function greeting() {
  return "Morning Sir";
}

// console.log(greeting());

// parameters and arguments

function favouriteMovie(name, year) {
  console.log(`The movie is ${name} and it was in ${year} year`);
}

favouriteMovie("Odyssey", 2022);
favouriteMovie("Brave new world", 2025);
favouriteMovie("Fast X", 2023);
favouriteMovie("Iron Man 3", 2013);

function favouriteMovie(name, year, random = true) {
  console.log(`The movie is ${name} and it was in ${year} year ${random}`);
}

favouriteMovie("Odyssey", 2022, false);
favouriteMovie("Brave new world", 2025);
favouriteMovie("Fast X", 2023);
favouriteMovie("Iron Man 3", 2013);

const Cubed = function Square(n) {
  return n * n * n;
};

console.log(Cubed(5));

function CheckEven(n) {
  return n % 2 == 0;
}
// % is a modulus operator, it gives the remainder of a value
// 5 % 2: it's going to give an output of 1, cause that is the remainder
console.log(CheckEven(7));

function evenOrOdd(number) {
  return number % 2 == 0 ? "Even" : "Odd";
}

//Anonymus Fucntion
// a function wihthout a name

const Greet = function (greet) {
  return `${greet}`;
};

console.log(Greet("Good Morning"));

// Callbacks =  a callback is a functuon that is being called uin another function

function sayHello(callback) {
  console.log("hello");
  callback();
}

function sayName() {
  console.log("Mathew");
}

sayHello(sayName);

function getCharcter(callback, firstname, lastname) {
  let combine = firstname + lastname;
  callback(combine);
}

function getFullname(combination) {
  console.log(combination);
}

getCharcter(getFullname, "E", "E");
