// Arrays = this is a variable like strucuture used for storing vales

let array1 = ["Mattew", "John", "Jacob", "Mike"];
console.log(array1);
console.log(array1.length);

// array method
// pop = removes an item from the end of an array
console.log(array1.pop());
console.log(array1);

// push = adds an item to the end of an array
console.log(array1.push("wealth"));
console.log(array1);

// shift = removes an item to the beginning of an array
console.log(array1.shift());
console.log(array1);

// unshift = removes an item to the beginning of an array
console.log(array1.unshift("BraveStone"));
console.log(array1);

let player = ["joa Pedro", "Cole Palmer", "Morgan Rogers", "Ronaldo [GOAT]"];

for (let i = 0; i < player.length; i++) {
  console.log(i + 1, player[i]);
}

player.forEach((element, index) => {
  console.log(`${index + 1}. ${element}`);
});

let numebers = [1, 2, 3, 4, 5];
numebers.forEach(cubeNumber);
numebers.forEach(display);

function cubeNumber(element, index, array) {
  return (array[index] = element ** 3);
}

function display(element) {
  console.log(element);
}

// fillter()
// .filter = creates a new array by filtering out elemnts
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEven = numbers2.filter(checkeven);
console.log(isEven);
const isOdd = numbers2.filter(checkOdd);
console.log(isOdd);

function checkeven(element) {
  return element % 2 == 0;
}

function checkOdd(element) {
  return element % 2 == 1;
}

let elements = ["Hydrogen", "Helium", "Lithuim", "Beryllium", "Boron"];

const longWord = elements.filter(checkLongWord);
console.log(longWord);
const shortWord = elements.filter(checkShortWord);
console.log(shortWord);

function checkLongWord(element) {
  return element.length >= 7;
}

function checkShortWord(elemnt) {
  return elemnt.length < 7;
}

// map() = accepts a callback and applies that functions to each element of an array.
// //       then returns a new array
let word = ["tiktok", "instagram", "linkedid", "facebook"];

const capitalfirstWord = word.map(capitalize);
console.log(capitalfirstWord);

function capitalize(element) {
  return element.charAt(0).toUpperCase() + element.slice(1);
}

// arrays are non primative data type

// .reduce() = reduce the elements of an array to a single value
//  the accumulator is:

// "the running result so far"

// it starts as the first elemt, then keeps updating.
// acumulator = result sp far
// element = current item

let number3 = [20, 30, 40, 50, 60];

const total = number3.reduce(SumTotal);
const average = total / number3.length;
console.log(`Total: ${total}`);
console.log(`Average: ${average}`);

function SumTotal(accumulator, element) {
  return accumulator + element;
}

// destructuring
// destructuring  = extract values from arrays and objects, then assign them to variables in a convenient way
// [] = to perform array destructing
// {} = to perform object destructing

const games = [
  "Fc26",
  "GTA 5",
  "GTA San Andreas",
  "GTA Vice city",
  "GTA Chinatown",
  "Grand Turismo",
];

const [firstGame, secondGame, ...extraGrames] = games;

console.log(firstGame);
console.log(secondGame);
console.log(extraGrames);

setInterval(() => {
  console.log("I am Emmanuel");
}, 1000);

// == it checks for the value only
// console.log(10 == '10) it's going to give an output of true because it compares the value regardless of the
// dataype so 10 is a number and '10' is a string but the vaules are the same.


// === it checks for the values and data type
// console.log(10 === '10') it's going to give an otput of false, although the values are the same, the datatype
// are diffrent
