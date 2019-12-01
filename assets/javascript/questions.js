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

function populateButtons() {
  // Does this need to be moved to after populateQuestions?
  for (var i = 0; i < questions[questionCount].choices.length; i++) {
    let button = document.createElement("button");
    button.setAttribute("class", "answerChoice");
    button.textContent = questions[questionCount].choices[i];
    document.getElementById("questionContainer").appendChild(button);
  }
}

function populateQuestions() {
  answerResult.textContent = "";
  questionNumber.textContent = `Question ${questionCount + 1}/5`;
  questionHeader.textContent = questions[questionCount].title;
  populateButtons();
}
