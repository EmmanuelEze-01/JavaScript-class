// if and else = if the statement executes a condition if true
//                                 and else if the condition is not met
// if(condition)

let age = 15;
if (age < 18) {
  console.log("You are not old enough to watch Annabelle");
} else if (age == 0) {
  console.log("0 is not an age!");
} else {
  console.log("Watch at your own risk!");
}

const isEmployed = true;

if (!isEmployed) {
  console.log("You're employed");
} else {
  console.log("You're jobless");
}

let isVerified = -1;
if (isVerified < 0) {
  console.log(`${isVerified} is not a valid Number!`);
} else if (Boolean(isVerified)) {
  console.log("You are verified");
} else {
  console.log("You are not verified, please verify");
}
