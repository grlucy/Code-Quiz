// "Easy" and "Hard" buttons are only active when no game is in progress (timer says "000"). When user clicks on "Easy" or "Hard" buttons, the button background-color changes and a boolean variable is assigned to store the active difficulty mode.

let easyBtn = document.getElementById("easyBtn");
let hardBtn = document.getElementById("hardBtn");
let easyMode = true;
let hardMode = false;

if (document.getElementById("time").textContent === "000") {
  // Need to add style refresh for when game ends and buttons become active again - nested if statement - if easyMode, then this style; if hardMode, then this style

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
} else if (easyMode) {
  hardBtn.style.backgroundColor = "#aaa";
  hardBtn.style.color = "#ccc";
  hardBtn.style.cursor = "default";
  easyBtn.style.backgroundColor = "#888";
  easyBtn.style.color = "#ccc";
  easyBtn.style.cursor = "default";
  document.querySelector(".difficultyCaption").style.color = "#999";
} else {
  hardBtn.style.backgroundColor = "#888";
  hardBtn.style.color = "#ccc";
  hardBtn.style.cursor = "default";
  easyBtn.style.backgroundColor = "#aaa";
  easyBtn.style.color = "#ccc";
  easyBtn.style.cursor = "default";
  document.querySelector(".difficultyCaption").style.color = "#999";
}
