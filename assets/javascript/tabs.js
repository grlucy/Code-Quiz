// When user clicks the "Instructions" or "High Scores" tabs, the corresponding div becomes visible below and tab's "border-bottom" changes

let highScoresTab = document.getElementById("highScoresTab");
let instructionsTab = document.getElementById("instructionsTab");

highScoresTab.addEventListener("click", function(event) {
  document.querySelector(".highScores").style.display = "block";
  document.querySelector(".instructions").style.display = "none";
  highScoresTab.style.borderBottom = "none";
  instructionsTab.style.borderBottom = "1px solid #999";
});

instructionsTab.addEventListener("click", function(event) {
  document.querySelector(".instructions").style.display = "block";
  document.querySelector(".highScores").style.display = "none";
  instructionsTab.style.borderBottom = "none";
  highScoresTab.style.borderBottom = "1px solid #999";
});
