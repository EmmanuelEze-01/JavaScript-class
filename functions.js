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
