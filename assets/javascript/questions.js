// Array of questions and answers
var questions = [
  {
    title: "This is question 1?",
    choices: ["0wrong", "1wrong", "right", "3wrong"],
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

// Question number and question appear in question div
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

let rightAnswer;

// Click event created for each answer to the current question
function answerButtonClick() {
  let answerButtons = document.querySelectorAll(".answerChoice");

  for (var i = 0; i < answerButtons.length; i++) {
    let selectedAnswer = answerButtons[i];
    selectedAnswer.addEventListener("click", function(event) {
      if (selectedAnswer.textContent === questions[questionCount].answer) {
        // User's chosen answer was correct
        rightAnswer = true;
      } else {
        // User's chosen answer was incorrect
        rightAnswer = false;
      }
      // Delete the answer buttons
      while (document.getElementById("questionContainer").hasChildNodes()) {
        document
          .getElementById("questionContainer")
          .removeChild(document.getElementById("questionContainer").firstChild);
      }

      // Call function to repopulate Questions
      repopulateQuestions();
    });
  }
}

function repopulateQuestions() {
  if (questionCount < questions.length - 1) {
    // If the current question was not the last question...
    questionCount = questionCount + 1;
    if (rightAnswer) {
      answerResult.textContent = "Correct!";
    } else {
      answerResult.textContent = "Wrong!";
    }
    questionNumber.textContent = `Question ${questionCount + 1}/5`;
    questionHeader.textContent = questions[questionCount].title;
    populateButtons();
  } else {
    // If the current question was the last question...
  }
}
