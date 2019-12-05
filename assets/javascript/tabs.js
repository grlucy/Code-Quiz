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

function hideDivsOnResize() {
  if (window.innerWidth < 1024) {
    // When screen size decreases to 1023px width or less, .highScores div and .instructions div are set to display:none
    document.querySelector(".highScores").style.display = "none";
    document.querySelector(".instructions").style.display = "none";
  } else {
    // When screen size increases to 1024px width or more, default to instructions tab/div visible
    document.querySelector(".instructions").style.display = "block";
    document.querySelector(".highScores").style.display = "none";
    instructionsTab.style.borderBottom = "none";
    highScoresTab.style.borderBottom = "1px solid #999";
  }
}
window.onresize = hideDivsOnResize;
