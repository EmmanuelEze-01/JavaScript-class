//eventListener = listen for sprcifc events to create interactive web pages.
//      evets: keydown(you press down on a key), keyup(when you release a key), keypress
//      .addEventListener(event, callback);

const myBox = document.getElementById("mybox");

document.addEventListener("keydown", (event) => {
  myBox.textContent = "😆";
  myBox.style.backgroundColor = "tomato";
  console.log(event.key, "Has been pressed");
});

document.addEventListener("keyup", (event) => {
  myBox.textContent = "😏";
  myBox.style.backgroundColor = "#fff";
  console.log(event.key, "Has been released");
});

myBox.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "yellow";
});

myBox.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "red";
});
myBox.addEventListener("dblclick", (event) => {
  event.target.style.backgroundColor = "green";
});
