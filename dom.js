// DOM = Documented Object Model
// object{} that represents with an API to interact with it
// and provoides you with an API to interact with it
// web browser constructs the DOM when it loads an HTML document
// and structures all the elements in a tree like representation
// javascript can access the DOM to dynamically
//  change the content, structure, and style of a web page

// HTML is the written plan. the DOM is the live version the browser builds from it. Javascript edits the live version

const header = document.getElementById("my-heading");
const user = " James Bond";

header.textContent += user == "" ? "Guest" : user;

function changetoRed() {
  document.body.style.backgroundColor = "red";
}

function changetoYellow() {
  document.body.style.backgroundColor = "yellow";
}

// element selectors = methods used to target and manipulate HTML elements
//  They allow you to select one or more multiple HTML elements
//  from the DOM (Document Object Model)
//
// document.getElementById() // ELEMENT OR NULL
// document.getElementsByClassName() // HTML COLLECTION
// document.getElementsByTagName() // HTML COLLECTION
// document.querySelector() // ELEMENT OR NULL
// document.querySelectorAll() // MODELIST

const header1 = document.getElementById("header");

header1.style.textAlign = "center";
header1.style.color = "white";
header1.style.background = "black";
header1.style.fontSize = "20px";

// console.log(header1);

const foods = document.getElementsByClassName("fruits");
// console.log(foods);
foods[0].style.textAlign = "center";
foods[1].style.textAlign = "right";
foods[2].style.color = "blue";

// using for loops
// let i = 0; i < 6; i++
for (let food of foods) {
  food.style.backgroundColor = "brown";
}

// method one (up)

Array.from(foods).forEach((food) => {
  food.style.backgroundColor = "blue";
});

// method two (up)

const h4Element = document.getElementsByTagName("h4");

h4Element[0].style.backgroundColor = "tomato";
h4Element[0].style.padding = "10px 20px";

h4Element[1].style.border = "1px solid red";
h4Element[1].style.padding = "10px 20px";
h4Element[1].style.borderRadius = "20px";

for (let h4Elements of h4Element) {
  h4Elements.style.backgroundColor = "blue";
}

const listItem = document.querySelector("li");
// listItem.style.backgroundColor = "red";

const listItem2 = document.querySelectorAll("li");

listItem2[0].style.backgroundColor = "red";
listItem2[1].style.backgroundColor = "red";

listItem2.forEach((element) => {
  element.style.backgroundColor = "green";
});
