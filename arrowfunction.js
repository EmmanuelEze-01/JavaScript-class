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
