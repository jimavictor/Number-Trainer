const firstNumber = document.querySelector(".first-number");
const secondNumber = document.querySelector(".second-number");
const answerField = document.querySelector(".answer-field");
const checkButton = document.querySelector(".check-button");

document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();
  checkAnswer();
});

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max + 1);
}

function checkAnswer() {
  let result =
    parseInt(firstNumber.innerText) + parseInt(secondNumber.innerText);
  let answer = parseInt(document.querySelector(".answer-field").value);

  if (answerField.value !== "") {
    if (result == answer) {
      console.log("correct");
      init();
    } else {
      console.log("wrong");
    }
  }
}

function init() {
  firstNumber.innerText = generateRandomNumber(99);
  secondNumber.innerText = generateRandomNumber(99);
  answerField.value = "";
  answerField.focus();
}

window.onload = function () {
  init();
};
