// ES6 Module = An external file that contains reusable code that can be imnported into other
//      javascript files. Write resuable code for many differnt apps. Can contain varibles
//      classes, functions ... and more Inrroduced as part of ECMAScript 2015 update

export function PI() {
  console.log(Math.PI);
}

export function getAreaCircle(radius) {
  return Math.PI * radius * radius;
}

export function getVolumeSphere(radius) {
  return (4 / 3) * Math.PI * radius * radius * radius;
}

// console.log(getVolumeSphere(5));

// console.log(getAreaCircle(9));
