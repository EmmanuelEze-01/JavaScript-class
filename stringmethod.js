// Stringmethods = this alows us  to manipulate strings(text)

let name = "John Cena";

console.log("Lenght METHOD", name.length);
console.log("Character At:", name.charAt(0));
console.log("Character Code At:", name.charCodeAt(0));
console.log("Upper Case:", name.toUpperCase(0));
console.log("Lower Case:", name.toLowerCase(0));

let name2 = "     James Bond   ";
console.log(name2.trim());
console.log(name2.trimStart());
console.log(name2.trimEnd());

let name3 = "Jacob Ramsey";
console.log(name3.slice(2));
console.log(name3.slice(1, 6));
console.log(name3.slice(-1));
console.log(name3.slice(11));
console.log(name3.slice(-5, -2));
console.log(name3.slice(0, 11));

let uni1 = "Nile Uni";
let uni2 = "Base Uni";
console.log(uni1.concat("versity")); //Concatination method 1
console.log(uni2.concat("versity")); //Concatination method 1
console.log(uni1 + "versity"); //Concatination method 2
console.log(uni2 + "versity"); //Concatination method 2
