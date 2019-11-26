// When user clicks on "Easy" or "Hard" buttons, the button background-color changes and a boolean variable is assigned to store the active difficulty mode.

let easyBtn = document.getElementById("easyBtn");
let hardBtn = document.getElementById("hardBtn");
let easyMode = true;
let hardMode = false;

hardBtn.addEventListener("click", function(event) {
  easyBtn.style.backgroundColor = "#999";
  hardBtn.style.backgroundColor = "#444";
  easyMode = false;
  hardMode = true;
});

easyBtn.addEventListener("click", function(event) {
  hardBtn.style.backgroundColor = "#999";
  easyBtn.style.backgroundColor = "#444";
  easyMode = true;
  hardMode = false;
});
