// function countSeconds() {
//   const time = new Date();
//   const leftSeconds =
//     time.getHours() * 60 * 60 + time.getMinutes() * 60 + time.getSeconds();
//   console.log("Seconds today", leftSeconds);
//   const totalSecondsInDay = 24 * 60 * 60;
//   console.log("totalseconds", totalSecondsInDay);
//   console.log(totalSecondsInDay - leftSeconds);
// }

// function sumNumbersSquared() {
//   let sum = 0;
//   for (let i = 1; i <= 100000; i++) {
//     sum += i * i;
//   }
// }

// function timer() {
//   const startTime = Date.now();
//   sumNumbersSquared();
//   const endTime = Date.now();
//   console.log(endTime - startTime);
// }

// export function userDate() {
//   let userDate = prompt("Please, enter DD.MM.YYYY");
//   const [day, month, year] = userDate.split(".");

//   userDate = new Date(`${year}-${month}-${day}`);
//   const diff = (Date.now() - userDate) / 1000 / 60 / 60;
//   console.log(diff.toFixed(0));
// }

// function formatDate(data) {
//   const day = makeTwoDidgits(data.getDate());
//   const month = makeTwoDidgits(data.getMonth() + 1);
//   const year = data.getFullYear();
//   const hours = makeTwoDidgits(data.getHours());
//   const minutes = makeTwoDidgits(data.getMinutes());
//   const dateFormat = `${day}.${month}.${year} ${hours}:${minutes}`;
//   console.log(dateFormat);
// }
// function makeTwoDidgits(num) {
//   return num < 10 ? `0${num}` : num;
// }

// const date = new Date("2023-07-23T14:48");
// formatDate(date);

export function userDate() {
  let userDate = prompt("Please, input the date DD.MM.YYYY");
  let regexp = /(\d){2}\.(\d){2}\.(\d){4}/i;
  if (!userDate) {
    alert("You haven't input the date!");
  } else if (regexp.test(userDate)) {
    const [day, month, year] = userDate.split(".");
    userDate = new Date(`${year}-${month}-${day}`);
    const dayOfWeek = userDate.getDay();
    let fullDayOfWeek;
    switch (dayOfWeek) {
      case 1:
        fullDayOfWeek = "Monday";
        break;
      case 2:
        fullDayOfWeek = "Tuesday";
        break;
      case 3:
        fullDayOfWeek = "Wednesday";
        break;
      case 4:
        fullDayOfWeek = "Thursday";
        break;
      case 5:
        fullDayOfWeek = "Friday";
        break;
      case 6:
        fullDayOfWeek = "Saturday";
        break;
      case 0:
        fullDayOfWeek = "Sunday";
        break;
    }
    console.log(`Today is ${fullDayOfWeek}`);
  } else {
    alert("Incorrect type of a date");
  }
}

export function countDayMinutes() {
  const date = new Date();
  const leftMinutes = date.getHours() * 60 + date.getMinutes();
  console.log(leftMinutes);
}

export function youngestUser(birthdayUser1, birthdayUser2) {
  const [dayUser1, monthUser1, yearUser1] = birthdayUser1.split(".");
  const [dayUser2, monthUser2, yearUser2] = birthdayUser2.split(".");

  let birthUser1 = new Date(`${yearUser1}-${monthUser1}-${dayUser1}`);
  let birthUser2 = new Date(`${yearUser2}-${monthUser2}-${dayUser2}`);
  return birthUser1 - birthUser2 > 0 ? birthdayUser1 : birthdayUser2;
}
