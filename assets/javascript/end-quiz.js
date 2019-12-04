let finalScore = document.getElementById("finalScore");
let highScoreInstruction = document.getElementById("highScoreInstruction");
let enterScoreName = document.getElementById("enterScoreName");

function quizOver() {
  clearQuestions();
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
  // Add click event for button to submit initials to high score list
  initialsBtn.addEventListener("click", submitInitials);
}

function submitInitials(event) {
  // Get stored high scores from local storage, parsing the JSON string to an object
  initScores();
  // Store user's score and initials in an array, then push array to the stored high scores object
  let highScoreInitials = initialsInput.value;
  let timeScore = document.getElementById("time").textContent;
  sortedHighScores.push(`${timeScore} \u00A0 ${highScoreInitials}`);
  // Sort the stored high scores object
  sortedHighScores.sort();
  // Save the sorted high scores object back to local storage
  localStorage.setItem(
    "storedSortedHighScores",
    JSON.stringify(sortedHighScores)
  );
  // update the high scores div
  renderScoresDiv();
  // Quiz-over screen disappears and confirm submission appears for 3 seconds.
  answerResult.textContent = "";
  finalScore.textContent = "";
  highScoreInstruction.textContent = "";
  enterScoreName.removeChild(initialsBtn);
  enterScoreName.removeChild(initialsInput);
  document.getElementById("submitConfirm").textContent =
    "Your score has been added.";
  var k = 0;
  let confirmTimer = setInterval(function() {
    k++;
    if (k == 3) {
      document.getElementById("submitConfirm").textContent = "";
      clearInterval(confirmTimer);
      // Page reloads to refresh high score list and reactivate buttons
      location.reload();
    }
  }, 1000);
}
