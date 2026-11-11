// Arrow function
//

// function sayhello(){
//  console.log('hello')
// }

//  sayhello()

const sayHello = () => {
  console.log("Hello");
};

sayHello();

const watchMovie = (name, genre, year) => {
  console.log(`${name} was released in ${year} and is a ${genre} movie`);
};

watchMovie("Scream", "Horror", 1966);

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumber = number.filter((element) => {
  return element % 2 == 0;
});

console.log(evenNumber);
