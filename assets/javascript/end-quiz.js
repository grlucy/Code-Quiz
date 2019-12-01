let finalScore = document.getElementById("finalScore");
let highScoreInstruction = document.getElementById("highScoreInstruction");
let enterScoreName = document.getElementById("enterScoreName");

function quizOver() {
  // Populate the quiz-over screen
  let timeScore = document.getElementById("time").textContent;
  finalScore.textContent = `Your final score is ${timeScore}.`;
  highScoreInstruction.textContent = "Enter your high score initials:";
  let initialsInput = document.createElement("input");
  initialsInput.setAttribute("type", "text");
  initialsInput.setAttribute("id", "initialsInput");
  enterScoreName.appendChild(initialsInput);
  let initialsBtn = document.createElement("button");
  initialsBtn.setAttribute("id", "initialsBtn");
  initialsBtn.textContent = "Enter";
  enterScoreName.appendChild(initialsBtn);
}
