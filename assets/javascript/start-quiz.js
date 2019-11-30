// When the user clicks "start quiz", the button becomes disabled, the timer starts counting down (from either 75 or 60, depending on difficulty setting), and the first quiz question appears.

let easyCountdown;
let hardCountdown;

function easyTimer() {
  setInterval(function() {
    easyCountdown--;
    document.getElementById("time").textContent = "0" + easyCountdown;
  }, 1000);
}
function hardTimer() {
  setInterval(function() {
    hardCountdown--;
    document.getElementById("time").textContent = "0" + hardCountdown;
  }, 1000);
}

// User clicks start button
startBtn.addEventListener("click", function(event) {
  if (startBtn.getAttribute("data-state") === "enabled") {
    // Button is disabled
    startBtn.setAttribute("data-state", "disabled");
    startBtn.style.backgroundColor = "#bbb";
    startBtn.style.cursor = "default";
    document.querySelector(".timeCaption").style.color = "#000";
    document.getElementById("time").style.color = "#000";

    if (easyMode) {
      // Timer is started with 75 seconds
      easyCountdown = 75;
      document.getElementById("time").textContent = "0" + easyCountdown;
      easyTimer();
    } else {
      // Timer is started with 60 seconds
      hardCountdown = 60;
      document.getElementById("time").textContent = "0" + hardCountdown;
      hardTimer();
    }
  } else {
    return;
  }
});

function resetStartBtn() {
  startBtn.setAttribute("data-state", "enabled");
  startBtn.style.backgroundColor = "#444";
  startBtn.style.cursor = "pointer";
  document.querySelector(".timeCaption").style.color = "#aaa";
  document.getElementById("time").style.color = "#aaa";
}
