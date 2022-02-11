//*****DATA */

// const leftTopData = [
//   { id: "clear", innerItem: "AC" },
//   { id: "toggle", innerItem: "+/-" },
//   { id: "deletE", innerItem: "ok" },
// ];
// const leftMiddleData = [
//   { id: "btn7", innerItem: "7" },
//   { id: "btn8", innerItem: "8" },
//   { id: "btn9", innerItem: "9" },
//   { id: "btn4", innerItem: "4" },
//   { id: "btn5", innerItem: "5" },
//   { id: "btn6", innerItem: "6" },
//   { id: "btn1", innerItem: "1" },
//   { id: "btn2", innerItem: "2" },
//   { id: "btn3", innerItem: "3" },
// ];
// const leftBottomData = [
//   { id: "btn0", innerItem: "0" },
//   { id: "comma", innerItem: "," },
// ];
// const rightSideData = [
//   { id: "division", innerItem: "/" },
//   { id: "multiplication", innerItem: "*" },
//   { id: "subtraction", innerItem: "-" },
//   { id: "addition", innerItem: "+" },
//   { id: "result", innerItem: "=" },
// ];

//*******Elements Selector */

// const main = document.querySelector(".container");
// const leftSideSectionTop = document.querySelector(".leftSideSectionTop");
// const leftSideSectionMiddle = document.querySelector(".leftSideSectionMiddle");
// const leftSideSectionBottom = document.querySelector(".leftSideSectionBottom");
// const rightSideSection = document.querySelector(".rightSideSection");

const textArea = document.querySelector("p");
const btnsSection = document.querySelector(".btnsSection");

// const btn0 = document.getElementById("btn0");
// const btn0 = document.getElementById("btn0");
// const btn0 = document.getElementById("btn0");
// const btn0 = document.getElementById("btn0");
// const btn0 = document.getElementById("btn0");
// const btn0 = document.getElementById("btn0");

//*****Buttons Creating */

//*****!! Burada iki deger alan bir fonksiyon yaz ve ilk deger dat isimini ikinci de append edilecek yeri alsın ama sonra önce ürün cıkar!!! */
// let button;
// leftTopData.forEach((item) => {
//   button = document.createElement("button");
//   button.className = "btn";
//   button.id = `${item.id}`;
//   button.textContent = `${item.innerItem}`;
//   leftSideSectionTop.appendChild(button);
// });

// leftMiddleData.forEach((item) => {
//   button = document.createElement("button");
//   button.className = "btn";
//   button.id = `${item.id}`;
//   button.textContent = `${item.innerItem}`;
//   leftSideSectionMiddle.appendChild(button);
// });

// let atKafasi = true;
// leftBottomData.forEach((item) => {
//   button = document.createElement("button");
//   button.className = "btn";
//   button.id = `${item.id}`;
//   button.textContent = `${item.innerItem}`;
//   if (atKafasi) {
//     button.classList.add("col-8");
//     atKafasi = false;
//   }
//   button.classList.add("col-4");
//   leftSideSectionBottom.appendChild(button);
// });

// rightSideData.forEach((item) => {
//   button = document.createElement("button");
//   button.className = "btn";
//   button.id = `${item.id}`;
//   button.textContent = `${item.innerItem}`;
//   rightSideSection.appendChild(button);
// });

// clickButton.addEventListener("click", function(btn) {

// }
//*****repeat Element Selector */

// const btn0 = document.getElementById("btn0");
// const btn1 = document.getElementById("btn1");
// const btn2 = document.getElementById("btn2");
// const btn3 = document.getElementById("btn3");
// const btn4 = document.getElementById("btn4");
// const btn5 = document.getElementById("btn5");
// const btn6 = document.getElementById("btn6");
// const btn7 = document.getElementById("btn7");
// const btn8 = document.getElementById("btn8");
// const btn9 = document.getElementById("btn9");
// const clear = document.getElementById("clear");
// const toggle = document.getElementById("toggle");
// const deletE = document.getElementById("deletE");
// const comma = document.getElementById("comma");
// const division = document.getElementById("division");
// const multiplication = document.getElementById("multiplication");
// const subtraction = document.getElementById("subtraction");
// const addition = document.getElementById("addition");
// const result = document.getElementById("result");

//********* operations*/

//********Division */

const divisionFunction = function (a, b) {
  return a / b;
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
