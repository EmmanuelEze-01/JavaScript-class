// object = A collection of a related properties(like firstname, age e.t.c) and/or method(functions that belong to object)
// can represent real world objects
// (people, products, places)
// object = {key: vlaue, function()}

let person = {
  name: "James Bond",
  age: 10,
  isStudent: false,
  sayHi: function () {
    return "The name bond..., James Bond";
  },
};

console.log(person);

// Accessing object key using dot notation
console.log(person.name);
console.log(person.age);
console.log(person.isStudent);
console.log(person.sayHi());

// Accessing object key using Bracket notation
console.log(person["name"]);
console.log(person["age"]);
console.log(person["isStudent"]);
// You can't access method using bracket notation

let person2 = {
  name: "Patrick",
  isEmployed: true,
  salary: 35000,
  about: function () {
    return `${this.name} is Employed and earns ${this.salary}`;
  },
  child: {
    name: "Jake",
    age: "56",
  },
};

console.log(person2);
console.log(person2.about());
console.log(person2.child);
console.log(person2.child.name);

let attendance = new Object();
attendance.name = "Ramsey";
attendance.age = 50;

attendance.sayHello = function () {
  return `Hi bro`;
};

console.log(attendance.name);
console.log(attendance.sayHello());

let grandParents = {
  name: "Regina",
  age: 75,
  salary: 600000,
  greet: function () {
    return `Hello, I am ${this.name}`;
  },
  parent: {
    name: "Williams",
    age: 50,
    salary: 25000000,
  },
};

console.log(grandParents);
console.log(grandParents.name);
console.log(grandParents.age);
console.log(grandParents.salary);
console.log(grandParents.greet());
console.log(grandParents["parent"]);
console.log(grandParents.parent["name"]);
console.log(grandParents.parent["age"]);
console.log(grandParents.parent["salary"]);

const employer = {
  fname: "jeff B",
  age: 67,
  company: "Amazon",
  networth: 380000000000000n,
};

const { fname, age, company, networth } = employer;
console.log(fname);
console.log(age);
console.log(company);
console.log(networth);
