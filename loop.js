// loop = repests some code over a given period of time

// for is best when you know how many times to lppo, Initialization, condition, and update all live in one AudioListener.

// The while loop: "Kepp going until something happens"

//Iterator
for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  console.log(`Number${i + 1}`, i);
}

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

let i = 10;
while (i > 9) {
  console.log(i);
  i++;
}

for (let i = 0; i <= 13; i++) {
  if (i == 12) {
    continue;
  } else {
    console.log(i);
  }
}
