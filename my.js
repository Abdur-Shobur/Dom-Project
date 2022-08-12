let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let date = today.getDate();
let day = today.getDay();
let hour = today.getHours();
let minute = today.getMinutes();
let sec = today.getSeconds();
let dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("Today is : " + dayList[day]);

// Current time
let prepend = hour >= 12 ? " Pm " : " Am ";
hour = hour >= 12 ? hour - 12 : hour;
if (hour === 0 && prepend === " Pm ") {
  if (minute < 60 && sec < 60) {
    hour = 12;
    prepend = " Mid Day";
  } else {
    hour = 12;
    prepend = " Pm";
  }
}
if (hour === 0 && prepend === " Am ") {
  if (minute < 60 && sec < 60) {
    hour = 12;
    prepend = " Midnight";
  } else {
    hour = 12;
    prepend = " Am";
  }
}
console.log(hour);

// output
console.log("Current Time : " + hour + prepend + " : " + minute + " : " + sec);
document.getElementById("h1").innerHTML =
  "Today is : " +
  dayList[day] +
  "<br>" +
  "Current Time : " +
  hour +
  prepend +
  " : " +
  minute +
  " Min : " +
  sec +
  " Sec";

//   Date Month Year
if (date < 10) {
  date = "0" + date;
}
if (month < 10) {
  month = "0" + month;
}

let thisDay = date + "/" + month + "/" + year;

// output
console.log(thisDay);
document.getElementById("h2").innerHTML = thisDay;

// project 02
let h3 = document.getElementById("h3");
let h4 = document.getElementById("h4");
let btn1 = document.getElementById("btn1");

function myFun01() {
  let myLotary = Math.ceil(Math.random() * 10);
  console.log(myLotary);
  let myMach = prompt("input number 1 to 10 :");
  h3.innerHTML = myMach;
  console.log(myMach);
  if (myMach == myLotary) {
    console.log("matched");
    h4.innerHTML =
      "Matched <br> Send Me Your Bkash Number You are Win <Code> 0.0 USD</code>";
  } else {
    console.log("not matched, the number was " + myLotary);
    h4.innerHTML = "not matched, the number was " + myLotary;
  }
}

// project 03
function multiplyBy01() {
  let num03 = document.getElementById("num03").value;
  let num02 = document.getElementById("num02").value;
  let result03 = document.getElementById("result03");
  result03.innerHTML = num03 * num02;
}

function divideBy02() {
  let num03 = document.getElementById("num03").value;
  let num02 = document.getElementById("num02").value;
  let result03 = document.getElementById("result03");
  result03.innerHTML = num03 / num02;
}
function clearBy01() {
  let num03 = (document.getElementById("num03").value = "");
  let num02 = (document.getElementById("num02").value = "");
  let result03 = document.getElementById("result03");
  result03.innerHTML = "";
}

// project 04
function cToF41() {
  let num04 = document.getElementById("num04");
  let result04 = document.getElementById("result04");
  num04 = num04.value;
  const cToF = (num04 * 9) / 5 + 32;
  console.log(cToF);
  result04.innerHTML = cToF;
}
function fToC41() {
  let num04 = document.getElementById("num04");
  let result04 = document.getElementById("result04");
  num04 = num04.value;
  const fToC = ((num04 - 32) * 5) / 9;
  console.log(fToC);
  result04.innerHTML = fToC;
}
function clearBy41() {
  let num04 = document.getElementById("num04");
  let result04 = document.getElementById("result04");
  num04 = num04.value = "";
  const fToC = ((num04 - 32) * 5) / 9;
  console.log("");
  result04.innerHTML = "";
}

// project 05
function toExt() {
  let num05 = document.getElementById("num05");
  num05 = num05.value;
  let result05 = document.getElementById("result05");
  const ex50 = num05.split(".").pop();
  result05.innerHTML = ex50;
  return;
}
function clearBy51() {
  let num05 = document.getElementById("num05");
  num05 = num05.value = "";
  let result05 = document.getElementById("result05");
  const ex50 = num05.split(".").pop();
  result05.innerHTML = "";
  return;
}
// project 6
function toSub6() {
  let num06 = document.getElementById("num06");
  num06 = num06.value;
  let result06 = document.getElementById("result06");
  if (num06 <= 20) {
    result06.innerHTML = 20 - num06;
  } else {
    result06.innerHTML = (num06 - 20) * 2;
  }
  return;
}
function clearBy61() {
  let num06 = document.getElementById("num06");
  num06 = num06.value = "";
  let result06 = document.getElementById("result06");
  if (num06 <= 20) {
    result06.innerHTML = "";
  } else {
    result06.innerHTML = "";
  }
  return;
}

// project 07
function toSub07() {
  let num07 = document.querySelector("#num07").value;
  let num07_2 = document.querySelector("#num07_2").value;
  let result07 = document.querySelector("#result07");
  const result3 = (parseInt(num07) + parseInt(num07_2)) * 3;
  if (num07 == num07_2) {
    return (result07.innerHTML = result3);
  } else {
    return (result07.innerHTML = parseInt(num07) + parseInt(num07_2));
  }
}
function clearBy07() {
  let num07 = (document.querySelector("#num07").value = "");
  let num07_2 = (document.querySelector("#num07_2").value = "");
  let result07 = document.querySelector("#result07");

  if (num07 == num07_2) {
    return (result07.innerHTML = "");
  } else {
    return (result07.innerHTML = "");
  }
}

// project 08
function toSub08() {
  let num08 = document.querySelector("#num08").value;
  let num08_2 = document.querySelector("#num08_2").value;
  let result08 = document.querySelector("#result08");
  num08 = parseInt(num08);
  num08_2 = parseInt(num08_2);
  const test08 = num08 == 50 || num08_2 == 50 || num08_2 + num08 == 50;
  return (result08.innerHTML = test08);
}
function clearBy08() {
  let num08 = (document.querySelector("#num08").value = "");
  let num08_2 = (document.querySelector("#num08_2").value = "");
  let result08 = document.querySelector("#result08");
  num08 = parseInt(num08);
  num08_2 = parseInt(num08_2);
  const test08 = num08 == 50 || num08_2 == 50 || num08_2 + num08 == 50;
  return (result08.innerHTML = "");
}

// project 09
function toSub09() {
  let num09 = document.querySelector("#num09").value;
  let result09 = document.querySelector("#result09");
  const test09 = Math.abs(num09);
  const final09 = 100 - num09 <= 20 || 400 - num09 <= 20;
  return (result09.innerHTML = final09);
}
function clearBy09() {
  let num09 = (document.querySelector("#num09").value = "");
  let result09 = document.querySelector("#result09");
  return (result09.innerHTML = "");
}

// project 10
function toSub10() {
  let num10 = document.querySelector("#num10").value;
  let result10 = document.querySelector("#result10");
  if (num10 === null || num10 === undefined || num10.substring(0, 2) === "Py") {
    return (result10.innerHTML = num10);
  }
  return (result10.innerHTML = `Py${num10}`);
}
function clearBy10() {
  let num10 = (document.querySelector("#num10").value = "");
  let result10 = document.querySelector("#result10");
  return (result10.innerHTML = "");
}

// project 11
function toSub11() {
  let num11 = document.querySelector("#num11").value;
  let num11_2 = document.querySelector("#num11_2").value;
  let result11 = document.querySelector("#result11");
  num11_2 = parseInt(num11_2);
  part11 = num11.substring(0, num11_2);
  part11_2 = num11.substring(num11_2 + 1, num11.length);
  return (result11.innerHTML = part11 + part11_2);
}
function clearBy11() {
  let num11 = (document.querySelector("#num11").value = "");
  let num11_2 = (document.querySelector("#num11_2").value = "");
  let result11 = document.querySelector("#result11");
  return (result11.innerHTML = "");
}

// project 12
function toSub12() {
  let num12 = document.querySelector("#num12").value;
  let result12 = document.querySelector("#result12");
  let test12 = num12.length;
  if (test12 <= 1) {
    return (result12.innerHTML = num12);
  }
  let test12_3 = num12.substring(1, num12.length - 1);
  let testA = num12.charAt(test12 - 1) + test12_3 + num12.charAt(0);
  return (result12.innerHTML = testA);
}
function clearBy12() {
  let num12 = (document.querySelector("#num12").value = "");

  let result12 = document.querySelector("#result12");
  return (result12.innerHTML = "");
}

// Project 13
function toSub13() {
  let num13A = document.getElementById("num13A").value;
  let num13B = document.getElementById("num13B").value;
  let num13C = document.getElementById("num13C").value;
  let result13 = document.getElementById("result13");
  let mxValu = 0;
  num13A = parseInt(num13A);
  num13B = parseInt(num13B);
  num13C = parseInt(num13C);
  if (num13A > num13B) {
    mxValu = num13A;
  } else {
    mxValu = num13B;
  }
  if (num13C > mxValu) {
    mxValu = num13C;
  }

  result13.innerHTML = mxValu;
  console.log(mxValu);

  if (num13A > num13B > num13C) {
    console.log(num13A);
  }
  if (num13B > num13C > num13A) {
    console.log(num13B);
  }
  if (num13C > num13A > num13B) {
    console.log(num13C);
  }
}
function clearBy13() {
  let num13A = (document.getElementById("num13A").value = "");
  let num13B = (document.getElementById("num13B").value = "");
  let num13C = (document.getElementById("num13C").value = "");
  let result13 = document.getElementById("result13");

  result13.innerHTML = "";
}

// project 15

const colors15 = ["green", "red", "rgba(133,122,200)", "#f15025"];
const color15 = document.querySelector("#result15");
const pro15 = document.getElementById("pro-15");

function btn15() {
  const rend15 = rendColor();
  color15.innerHTML = colors15[rend15];
  pro15.style.backgroundColor = colors15[rend15];
  console.log(colors15);
}
function rendColor() {
  return Math.floor(Math.random() * colors15.length);
}

// project 16
const colors16 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const pro16 = document.getElementById("pro-16");
const result16 = document.getElementById("result16");
function btn16() {
  let hexColor16 = "#";
  for (let i = 0; i < 6; i++) {
    hexColor16 += colors16[hex16()];
  }
  console.log(hexColor16);
  result16.textContent = hexColor16;
  pro16.style.backgroundColor = hexColor16;
}
function hex16() {
  return Math.floor(Math.random() * colors16.length);
}

// project 17
let count17 = 0;
let value17 = document.querySelector("#value17");
let btn17 = document.querySelectorAll(".btn17");
btn17.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const style17 = e.currentTarget.classList;
    if (style17.contains("decrease")) {
      count17--;
    } else if (style17.contains("increase")) {
      count17++;
    } else {
      count17 = 0;
    }
    if (count17 < 0) {
      value17.style.color = "red";
    }
    if (count17 > 0) {
      value17.style.color = "green";
    }
    if (count17 === 0) {
      value17.style.color = "blue";
    }
    value17.textContent = count17;
  });
});

// project 18
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
const img18 = document.getElementById("person-img18");
const author18 = document.getElementById("author18");
const job18 = document.getElementById("job18");
const info18 = document.getElementById("info18");

const prevBtn18 = document.querySelector(".prev-btn18");
const nextBtn18 = document.querySelector(".next-btn18");
const randomBtn18 = document.querySelector(".random-btn18");

let currentIems18 = 3;
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentIems18);
});
function showPerson(person) {
  const items = reviews[person];
  img18.src = items.img;
  author18.textContent = items.name;
  job18.textContent = items.job;
  info18.textContent = items.text;
}
nextBtn18.addEventListener("click", function () {
  currentIems18++;
  if (currentIems18 > reviews.length - 1) {
    currentIems18 = 0;
  }
  showPerson(currentIems18);
  console.log(currentIems18);
});
prevBtn18.addEventListener("click", function () {
  currentIems18--;
  if (currentIems18 < 0) {
    currentIems18 = reviews.length - 1;
  }
  showPerson(currentIems18);
  console.log(currentIems18);
});
