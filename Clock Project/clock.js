// function updateClock() {
//   const now = new Date();

//   let days = now.getDate();
//   let month = now.getMonth() + 1;
//   console.log(month);
//   let daysLeft = 30 - days;
//   console.log(`${daysLeft} days remaining`);
//   let hour = now.getHours();
//   hour = hour % 12 || 12;
//   const minute = now.getMinutes().toString().padStart(2, 0);
//   d;
//   const seconds = now.getSeconds().toString().padStart(2, 0);

//   const meridian = hour >= 12 ? "PM" : "AM";
//   timeString = `${hour.toString().padStart(2, 0)}: ${minute}: ${seconds} ${meridian}`;
//   document.getElementById("clock").textContent = timeString;
// }

setInterval(() => {
  const now = new Date();

  let days = now.getDate();
  let month = now.getMonth() + 1;
  console.log(month);
  let daysLeft = 30 - days;
  console.log(`${daysLeft} days remaining`);
  let hour = now.getHours();
  hour = hour % 12 || 12;
  const minute = now.getMinutes().toString().padStart(2, 0);
 
  const seconds = now.getSeconds().toString().padStart(2, 0);

  const meridian = hour >= 12 ? "PM" : "AM";
  timeString = `${hour.toString().padStart(2, 0)}: ${minute}: ${seconds} ${meridian}`;
  document.getElementById("clock").textContent = timeString;
}, 1000);

setInterval(updateClock, 1000);
// updateClock();
