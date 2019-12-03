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

function clearQuestions() {
  // After the last question is answered or time runs out, question text and buttons disappear
  questionNumber.textContent = "";
  questionHeader.textContent = "";
  clearButtons();
}
function clearButtons() {
  // Delete the answer buttons
  while (document.getElementById("questionContainer").hasChildNodes()) {
    document
      .getElementById("questionContainer")
      .removeChild(document.getElementById("questionContainer").firstChild);
  }
}

// Question number and question appear in question div
function populateQuestions() {
  if (
    easyCountdown <= 0 ||
    hardCountdown <= 0 ||
    questionCount === questions.length
  ) {
    clearQuestions();
  } else {
    questionNumber.textContent = `Question ${questionCount + 1}/5`;
    questionHeader.textContent = questions[questionCount].title;
    populateButtons();
  }
}

// Buttons created for each answer to the current question
function populateButtons() {
  for (var i = 0; i < questions[questionCount].choices.length; i++) {
    let button = document.createElement("button");
    button.setAttribute("class", "answerChoice");
    button.textContent = questions[questionCount].choices[i];
    document.getElementById("questionContainer").appendChild(button);
  }
  answerButtonClick();
}

let rightAnswer;

// Click event created for each answer to the current question
function answerButtonClick() {
  let answerButtons = document.querySelectorAll(".answerChoice");

  for (var j = 0; j < answerButtons.length; j++) {
    let selectedAnswer = answerButtons[j];
    selectedAnswer.addEventListener("click", function(event) {
      if (
        easyCountdown <= 0 ||
        hardCountdown <= 0 ||
        questionCount === questions.length
      ) {
        clearQuestions();
      } else if (
        selectedAnswer.textContent === questions[questionCount].answer
      ) {
        // User's chosen answer was correct
        rightAnswer = true;
        answerResult.textContent = "Correct!";
      } else {
        // User's chosen answer was incorrect
        rightAnswer = false;
        answerResult.textContent = "Wrong!";
        // Time penalty
        if (easyMode) {
          easyCountdown -= 10;
          document.getElementById("time").textContent = easyCountdown;
        } else {
          hardCountdown -= 10;
          document.getElementById("time").textContent = hardCountdown;
        }
      }
      clearButtons();

      // Move on to next question
      questionCount++;
      populateQuestions();
    });
  }
}
