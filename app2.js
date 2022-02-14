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
let commaStatus = false;
buttons.forEach(function (btn) {
  btn.addEventListener("click", () => {
    console.log(commaStatus);
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
          textAreaTop.textContent += "0.";
          commaStatus = true;
          console.log(commaStatus);
        } else {
          textAreaTop.textContent += ".";
          commaStatus = true;
          console.log(commaStatus);
        }
        return;
      case "=":
        textAreaTop.textContent = textAreaBottom.textContent;
        textAreaBottom.textContent = "";
        commaStatus = false;
        console.log(commaStatus);
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
          commaStatus = false;
          console.log(commaStatus);
        }
        console.log(commaStatus);
        textAreaTop.textContent += btn.value;
        textAreaBottom.textContent = eval(`${textAreaTop.textContent}`);
        return;
    }
  });
});

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
