//*****DATA */

const data = [
  { id: "clear", innerItem: "AC" },
  { id: "toggle", innerItem: "+/-" },
  { id: "deletE", innerItem: "ok" },
  { id: "division", innerItem: "/" },
  { id: "btn7", innerItem: "7" },
  { id: "btn8", innerItem: "8" },
  { id: "btn9", innerItem: "9" },
  { id: "multiplication", innerItem: "*" },
  { id: "btn4", innerItem: "4" },
  { id: "btn5", innerItem: "5" },
  { id: "btn6", innerItem: "6" },
  { id: "subtraction", innerItem: "-" },
  { id: "btn1", innerItem: "1" },
  { id: "btn2", innerItem: "2" },
  { id: "btn3", innerItem: "3" },
  { id: "addition", innerItem: "+" },
  { id: "btn0", innerItem: "0" },
  { id: "comma", innerItem: "," },
  { id: "result", innerItem: "=" },
];

//*******Elements Selector */

let textArea = document.querySelector("p");
textArea.className = "d-flex justify-content-end align-items-end";
const btnsSection = document.querySelector(".btnsSection");

//*****Buttons Creating */
displayButtons(data);
// window.addEventListener("DOMContentLoaded", function () {
//   displayButtons(data);
// });

function displayButtons(data) {
  let button = data.map(function (e) {
    if (e.innerItem === "0") {
      return `<button id=${e.id} class="btn col-6">${e.innerItem}</button>`;
    } else {
      return `<button id=${e.id} class="btn col">${e.innerItem}</button>`;
    }
  });
  button = button.join("");
  btnsSection.innerHTML = button;
}

const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    const clickButton = e.currentTarget.textContent;
    const firstNumber = textArea.textContent;
    console.log(firstNumber);
    if (clickButton == "AC") {
      textArea.innerHTML = 0;
    }
    if (clickButton == "+/-") {
      textArea.innerHTML = 0 - textArea.textContent;
    }
    if (clickButton == "ok") {
      textArea.textContent = textArea.textContent.slice(
        0,
        textArea.textContent.length - 1
      );
    }
    if (clickButton == "/") {
      const b = textArea.textContent;
    }
    if (!isNaN(clickButton) || clickButton == ",") {
      return (textArea.textContent += clickButton);
    }
  });
});

//****sayı mı degil mi fonksiyonu */
// function isNumber() {
//   if (!isNaN(clickButton) || clickButton == ",") {
//     return (textArea.textContent += clickButton);
//   }
//   console.log("bu bir sayıdır veya virgül");
// }

const divisionFunction = function (a, b) {
  b = 0 ? alert("b sıfır olamaz") : a / b;
};

//********multiplication */
const multiplicationFunction = function (a, b) {
  return a * b;
};

//********subtraction */
const subtractionFunction = function (a, b) {
  return a - b;
};

//********addition */
const additionFunction = function (a, b) {
  return a + b;
};
