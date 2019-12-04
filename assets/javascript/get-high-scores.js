let sortedHighScores = [];
let storedScores = JSON.parse(localStorage.getItem("storedSortedHighScores"));
let scoreLine = document.getElementById("scoreLine");

function initScores() {
  if (storedScores !== null) {
    sortedHighScores = storedScores;
  }
}
function renderScoresDiv() {
  if (sortedHighScores.length > 0) {
    document.getElementById("noScoresStored").style.display = "none";
    // Clear scores div
    while (scoreLine.hasChildNodes()) {
      scoreLine.removeChild(scoreLine.firstChild);
    }
    // Populate scores div
    let scoreRank = 1;
    for (var i = sortedHighScores.length - 1; i >= 0; i--) {
      let newHighScore = document.createElement("p");
      newHighScore.setAttribute("class", "newHighScore");
      newHighScore.textContent = `#${scoreRank} \u00A0\u00A0 ${sortedHighScores[i]}`;
      scoreLine.appendChild(newHighScore);
      scoreRank++;
    }
  } else {
    document.getElementById("noScoresStored").style.display = "block";
    // Clear scores div
    while (scoreLine.hasChildNodes()) {
      scoreLine.removeChild(scoreLine.firstChild);
    }
  }
}

initScores();
renderScoresDiv();
