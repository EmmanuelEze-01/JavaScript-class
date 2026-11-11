// Promise = An Object that manages asynchronous operations. Wrap a promise around(asunchronous code)
//      "I promise to return a value". It represents a value that isn't ready yet but will be.
//      PENDING  -> RESOLVED(SEUCCESSFUL) OR REJECTED(FAILED)
//      NEW Promise((resolvedd, reject) => {asychronus code})

// .then is how you handle the result of a prmise once it resolves, and chaing .thens is that what lets you avoid callback hell.
// tasks
// 1.Chores
// 2.playFootball
// 3.Cooking

// function chores(callback) {
//   setTimeout(() => {
//     console.log("She is doing her chores");
//     callback();
//   }, 1000);
// }

// function playFootball(callback) {
//   setTimeout(() => {
//     console.log("She is playing football");
//     callback();
//   }, 2000);
// }

// function cooking(callback) {
//   setTimeout(() => {
//     console.log("She is cooking");
//     callback();
//   }, 3000);
// }

// chores(() => {
//   playFootball(() => {
//     cooking(() => {
//       console.log("Done");
//     });
//   });
// });

function chores() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hasCooked = true;
      if (hasCooked) {
        resolve("She has finished her chores");
      } else {
        reject("she has not done her chores yet");
      }
    }, 5000);
  });
}

function playFootball() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const playFootball = true;
      if (playFootball) {
        resolve("She has played football");
      } else {
        reject("she has not played football yet");
      }
    }, 3000);
  });
}

function cooking() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hasChores = true;
      if (hasChores) {
        resolve("She has finished cooking");
      } else {
        reject("she has not cooked yet");
      }
    }, 1000);
  });
}

// chores()
//   .then((value) => {
//     console.log(value);
//     return playFootball();
//   })
//   .then((value) => {
//     console.log(value);
//     return cooking();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log("I'm done");
//   })
//   .catch((err) => console.log(err));

//  //ASync/Await = Async = makes a function return a promise
//  //              Await = makes an async function wait for a promise

//  //              Allows you write asynchronous code in a synchrounous manner
//  //              Async does not have resolve or reject parameters
//  //              Everything after await is placed in an event queue

async function activites() {
  try {
    const hasDoneChores = await chores();
    console.log(hasDoneChores);

    const hasPlayedFootball = await playFootball();
    console.log(hasPlayedFootball);

    const hasFinishedCooking = await cooking();
    console.log(hasFinishedCooking);
  } catch (error) {
    console.log(error);
  }
}

activites();
