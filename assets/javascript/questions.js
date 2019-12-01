// Array of questions and answers
var questions = [
  {
    title: "This is question 1?",
    choices: ["wrong", "wrong", "right", "wrong"],
    answer: "right"
  },
  {
    title: "This is question 2?",
    choices: ["right", "wrong", "wrong", "wrong"],
    answer: "right"
  },
  {
    title: "This is question 3?",
    choices: ["wrong", "wrong", "right", "wrong"],
    answer: "right"
  },
  {
    title: "This is question 4?",
    choices: ["wrong", "wrong", "wrong", "right"],
    answer: "right"
  },
  {
    title: "This is question 5?",
    choices: ["wrong", "right", "wrong", "wrong"],
    answer: "right"
  }
];

let answerResult = document.getElementById("answerResult");
let questionNumber = document.getElementById("questionNumber");
let questionHeader = document.getElementById("questionHeader");
let questionCount = 0;

function populateQuestions() {
  answerResult.textContent = "";
  questionNumber.textContent = `Question ${questionCount + 1}/5`;
  questionHeader.textContent = questions[questionCount].title;
  populateButtons();
}

// Buttons created for each answer to the current question
function populateButtons() {
  for (var i = 0; i < questions[questionCount].choices.length; i++) {
    let button = document.createElement("button");
    button.setAttribute("class", "answerChoice");
    button.textContent = questions[questionCount].choices[i];
    document.getElementById("questionContainer").appendChild(button);
    answerButtonClick();
  }
}

function answerButtonClick() {
  let answerButtons = document.querySelectorAll(".answerChoice");
  console.log("got here1");
  for (var i = 0; i < answerButtons.length; i++) {
    console.log("got here2");
    let selectedAnswer = answerButtons[i];
    selectedAnswer.addEventListener("click", function(event) {
      if (selectedAnswer.textContent === questions[questionCount].answer) {
        console.log("correct");
      } else {
        console.log("incorrect");
      }
    });
  }
}
