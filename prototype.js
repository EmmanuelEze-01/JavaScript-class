// Prototypes = a prototype is a backup property of an object

// function Game(name, year, genre) {
//   this.name = name;
//   this.year = year;
//   this.genre = genre;
//   this.playTime = 0;
// }

// Game.prototype.getInfo = function () {
//   return `${this.name} was made in ${this.year}. it is a/an ${this.genre}`;
// };

// Game.prototype.play = function (hours) {
//   this.playTime += hours;
//   return `${this.name}: ${this.playTime}hrs`;
// };

// const mk = new Game("Mortal Kombat", 2017, "action");
// const freefire = new Game("Free Fire", 2019, "action");
// const residentEvil = new Game("ResidentEvil", 2017, "horror");

// console.log(mk.name);
// console.log(mk.year);
// console.log(mk.genre);
// console.log(freefire.name);
// console.log(freefire.year);
// console.log(freefire.genre);
// console.log(residentEvil.name);
// console.log(residentEvil.year);
// console.log(residentEvil.genre);

// console.log(mk.getInfo());
// console.log(freefire.getInfo());
// console.log(mk.play(9));
// console.log(mk.play(10));
// console.log(freefire.play(9));
// console.log(freefire.play(10));

// console.log(residentEvil.getInfo());

// construtors and class
// class = (ES6 features) provides a mmore structured and cleaner way yo wprl
// with objects compared to the tafitional constructor functions
// ex, static keyword, encapsulation, inheritance.

class Game {
  constructor(name, year, genre) {
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.playTime = 0;
  }

  getInfo() {
    return `${this.name} was qmade in ${this.year}. it is a/an ${this.genre} game`;
  }

  play(hours) {
    this.playTime += hours;
    return `${this.name}: ${this.playTime}hrs`;
  }
}

const mk = new Game("Mortal Kombat", 2017, "action");

console.log(mk.name);
console.log(mk.year);
console.log(mk.genre);
console.log(mk.play(9));
