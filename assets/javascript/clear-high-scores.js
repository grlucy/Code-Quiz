let clearHighScoresBtn = document.getElementById("clearHighScoresBtn");

function clearHighScores(event) {
  localStorage.removeItem("storedSortedHighScores");
  storedScores = JSON.parse(localStorage.getItem("storedSortedHighScores"));
  sortedHighScores = [];
  initScores();
  renderScoresDiv();
}

clearHighScoresBtn.addEventListener("click", clearHighScores);
