// Array of questions and answers
var questions = [
  {
    title: "What color is rgb(0,0,200)?",
    choices: ["red", "yellow", "blue", "green"],
    answer: "blue"
  },
  {
    title: "Which JavaScript method starts a timer?",
    choices: [
      "setInterval()",
      "createElement()",
      "getHours()",
      "clearInterval()"
    ],
    answer: "setInterval()"
  },
  {
    title:
      "Which Bootstrap class creates a fixed-width content box with width determined by screen size and equal margins on the left and right?",
    choices: [".divider", ".jumbotron", ".container", ".navbar"],
    answer: ".container"
  },
  {
    title:
      "Which language is primarily used to create the structure of web content?",
    choices: ["Bootstrap", "JavaScript", "CSS", "HTML"],
    answer: "HTML"
  },
  {
    title:
      "Which command can be used to create a folder on your local machine that accesses an existing Github repository?",
    choices: ["git pull", "git clone", "git push", "mkdir"],
    answer: "git clone"
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
        document.getElementById("correctSound").play();
      } else {
        // User's chosen answer was incorrect
        rightAnswer = false;
        answerResult.textContent = "Wrong!";
        document.getElementById("wrongSound").play();
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
