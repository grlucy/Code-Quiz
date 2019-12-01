// When the user clicks "start quiz", the button becomes disabled, the timer starts counting down (from either 75 or 60, depending on difficulty setting), and the first quiz question appears.

let easyBtn = document.getElementById("easyBtn");
let hardBtn = document.getElementById("hardBtn");
let easyMode = true;
let hardMode = false;
let startBtn = document.getElementById("startBtn");
let dataState = "enabled";

let easyCountdown;
let hardCountdown;

// User clicks start button
startBtn.addEventListener("click", function(event) {
  if (startBtn.getAttribute("data-state") === "enabled") {
    // Start button is set to disabled
    startBtn.setAttribute("data-state", "disabled");
    startBtn.style.backgroundColor = "#bbb";
    startBtn.style.cursor = "default";
    document.querySelector(".timeCaption").style.color = "#000";
    document.getElementById("time").style.color = "#000";

    // Difficulty buttons are set to disabled
    dataState = "disabled";
    if (easyMode) {
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

    if (easyMode) {
      // Timer is started with 75 seconds
      easyCountdown = 75;
      document.getElementById("time").textContent = easyCountdown;
      let easyTimer = setInterval(function() {
        // Stop timer when it reaches zero or all questions are answered
        if (easyCountdown <= 0 || questionCount === questions.length) {
          clearInterval(easyTimer);
          quizOver();
        } else {
          easyCountdown--;
          document.getElementById("time").textContent = easyCountdown;
        }
      }, 1000);
      // Populate question div
      populateQuestions();
    } else {
      // Timer is started with 60 seconds
      hardCountdown = 60;
      document.getElementById("time").textContent = hardCountdown;
      let hardTimer = setInterval(function() {
        // Stop timer when it reaches zero or all questions are answered
        if (hardCountdown <= 0 || questionCount === questions.length) {
          clearInterval(hardTimer);
          quizOver();
        } else {
          hardCountdown--;
          document.getElementById("time").textContent = hardCountdown;
        }
      }, 1000);
      // Populate question div
      populateQuestions();
    }
  } else {
    // Nothing happens on click if start button is currently disabled
    return;
  }
});

// TO DO::: Reset button styles after quiz ends
function resetStartBtn() {
  startBtn.setAttribute("data-state", "enabled");
  startBtn.style.backgroundColor = "#444";
  startBtn.style.cursor = "pointer";
  document.querySelector(".timeCaption").style.color = "#aaa";
  document.getElementById("time").style.color = "#aaa";
}
function resetDifficultyBtns() {
  dataState = "enabled";
  if (easyMode) {
    hardBtn.style.backgroundColor = "#999";
    hardBtn.style.color = "#fff";
    hardBtn.style.cursor = "pointer";
    easyBtn.style.backgroundColor = "#444";
    easyBtn.style.color = "#fff";
    easyBtn.style.cursor = "pointer";
    document.querySelector(".difficultyCaption").style.color = "#000";
  } else {
    hardBtn.style.backgroundColor = "#444";
    hardBtn.style.color = "#fff";
    hardBtn.style.cursor = "pointer";
    easyBtn.style.backgroundColor = "#999";
    easyBtn.style.color = "#fff";
    easyBtn.style.cursor = "pointer";
    document.querySelector(".difficultyCaption").style.color = "#000";
  }
}

// "Easy" and "Hard" buttons are only active when no game is in progress (when dataState is enabled). When user clicks on active "Easy" or "Hard" buttons, the button background-color changes and a boolean variable is assigned to store the active difficulty mode.
hardBtn.addEventListener("click", function(event) {
  if (dataState === "enabled") {
    easyBtn.style.backgroundColor = "#999";
    hardBtn.style.backgroundColor = "#444";
    easyMode = false;
    hardMode = true;
  } else {
    return;
  }
});
easyBtn.addEventListener("click", function(event) {
  if (dataState === "enabled") {
    hardBtn.style.backgroundColor = "#999";
    easyBtn.style.backgroundColor = "#444";
    easyMode = true;
    hardMode = false;
  } else {
    return;
  }
});
