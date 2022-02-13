//*****DATA */

const data = [
  { id: "clear", innerItem: "AC", value: "undefined" },
  { id: "toggle", innerItem: "+/-", value: "undefined" },
  { id: "deletE", innerItem: "ok", value: "undefined" },
  { id: "division", innerItem: "/", value: "/" },
  { id: "btn7", innerItem: "7", value: "7" },
  { id: "btn8", innerItem: "8", value: "8" },
  { id: "btn9", innerItem: "9", value: "9" },
  { id: "multiplication", innerItem: "*", value: "*" },
  { id: "btn4", innerItem: "4", value: "4" },
  { id: "btn5", innerItem: "5", value: "5" },
  { id: "btn6", innerItem: "6", value: "6" },
  { id: "subtraction", innerItem: "-", value: "-" },
  { id: "btn1", innerItem: "1", value: "1" },
  { id: "btn2", innerItem: "2", value: "2" },
  { id: "btn3", innerItem: "3", value: "3" },
  { id: "addition", innerItem: "+", value: "+" },
  { id: "btn0", innerItem: "0", value: "0" },
  { id: "comma", innerItem: ",", value: "." },
  { id: "result", innerItem: "=", value: "=" },
];

//*******Elements Selector */

let textAreaTop = document.querySelector(".textAreaTop");

let textAreaBottom = document.querySelector(".textAreaBottom");

const btnsSection = document.querySelector(".btnsSection");

//*****Buttons Creating */
displayButtons(data);
// window.addEventListener("DOMContentLoaded", function () {
//   displayButtons(data);
// });
//*********Buttons Selector */

const clear = document.getElementById("clear");
const toggle = document.getElementById("toggle");
const deletE = document.getElementById("deletE");
const division = document.getElementById("division");
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const multiplication = document.getElementById("multiplication");
const subtraction = document.getElementById("subtraction");
const addition = document.getElementById("addition");
const comma = document.getElementById("comma");
const result = document.getElementById("result");

const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {
  let commaStatus = false;
  btn.addEventListener("click", () => {
    switch (btn.value) {
      case "undefined":
        if (btn.id === "clear") {
          textAreaTop.textContent = "";
          textAreaBottom.textContent = "";
          commaStatus = false;
          console.log(commaStatus);
        } else if (btn.id === "toggle") {
          textAreaTop.textContent = 0 - textAreaTop.textContent;
        } else if (btn.id === "deletE") {
          textAreaTop.textContent = textAreaTop.textContent.slice(0, -1);
        }
        return;
      case ".":
        if (commaStatus) {
          console.log("1");
        } else if (
          textAreaTop.textContent.slice(-1) === "/" ||
          textAreaTop.textContent.slice(-1) === "*" ||
          textAreaTop.textContent.slice(-1) === "+" ||
          textAreaTop.textContent.slice(-1) === "-"
        ) {
          console.log("2");
          textAreaTop.textContent += "0.";
          commaStatus = true;
        } else {
          console.log("3");
          textAreaTop.textContent += ".";
          commaStatus = true;
        }
        return;
      case "=":
        textAreaTop.textContent = textAreaBottom.textContent;
        textAreaBottom.textContent = "";
        return;
      default:
        if (
          btn.id === "division" ||
          btn.id === "multiplication" ||
          btn.id === "subtraction" ||
          btn.id === "addition" ||
          btn.id === "comma"
        ) {
          if (isNaN(textAreaTop.textContent.slice(-1))) {
            textAreaTop.textContent = textAreaTop.textContent.slice(0, -1);
          }
          console.log("4");
          console.log(commaStatus);
          commaStatus = false;
        }
        console.log(commaStatus);
        textAreaTop.textContent += btn.value;
        textAreaBottom.textContent = eval(`${textAreaTop.textContent}`);
        return;
    }
  });
});
//*******************TEST SECTION */
// console.log(eval("55+5.5"));
// var str = "Hello TecAdmin!";
// var newStr = str.slice(0, -1);

// console.log(newStr);

// let text = "Hello planet earth, you are a great planet.";
// console.log(text.slice(-1));
//*********************************************************** */
// function reset() {}

// const buttons = document.querySelectorAll(".btn");
// buttons.forEach(function (btn) {
//   btn.addEventListener("click", (e) => {
//     let clickButton = e.currentTarget.textContent;
//     let firstNumber = +textAreaTop.textContent;
//     let secondNumber = textAreaTop.textContent;
//     reset(clickButton);
//     deleteSingleDigit(clickButton);
//     plusMinus(clickButton);
//     display(clickButton);
//     console.log(firstNumber);
//     if (division) {
//       secondNumber = display(clickButton);
//       firstNumber = firstNumber / secondNumber;
//     }
//   });
// });
// //****Display fonksiyonu(isNAN and comma) */

// function display(clickButton) {
//   if (
//     !isNaN(clickButton) ||
//     clickButton == "," ||
//     clickButton == "/" ||
//     clickButton == "*" ||
//     clickButton == "-" ||
//     clickButton == "+"
//   ) {
//     return (textAreaTop.textContent += clickButton);
//   }
// }
// const operation = function (clickButton) {
//   if (clickButton == "/") {
//     division = true;
//   } else if (clickButton == "*") {
//     multiplication = true;
//   }
// };
// //********Division */
// const divisionFunction = function () {};

// //*****AC (RESET) Function*/
function reset() {
  textAreaTop.innerHTML = "";
}
//***** eksi/artı Function*/

function minusPlus() {
  textAreaTop.innerHTML = 0 - textAreaTop.textContent;
}

//***** Delete single digit Function*/

function deleteSingleDigit() {
  textAreaTop.textContent = textAreaTop.textContent.slice(
    0,
    textAreaTop.textContent.length - 1
  );
}

// //********multiplication */
// const multiplicationFunction = function (a, b) {
//   return a * b;
// };

// //********subtraction */
// const subtractionFunction = function (a, b) {
//   return a - b;
// };

// //********addition */
// const additionFunction = function (a, b) {
//   return a + b;
// };

//*********************** Functions */
function displayButtons(data) {
  let button = data.map(function (e) {
    if (e.innerItem === "0") {
      return `<button id=${e.id} class="btn col-6" value=${e.value}>${e.innerItem}</button>`;
    } else {
      return `<button id=${e.id} class="btn col" value=${e.value}>${e.innerItem}</button>`;
    }
  });
  button = button.join("");
  btnsSection.innerHTML = button;
}

//************** Display value function*/
