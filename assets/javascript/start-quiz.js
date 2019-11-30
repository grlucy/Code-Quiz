// When the user clicks "start quiz", the button becomes disabled, the timer starts counting down (from either 75 or 60, depending on difficulty setting), and the first quiz question appears.

let startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function(event) {
  if (startBtn.getAttribute("data-state") === "enabled") {
    startBtn.setAttribute("data-state", "disabled");
    startBtn.style.backgroundColor = "#bbb";
    document.querySelector(".timeCaption").style.color = "#000";
    document.getElementById("time").style.color = "#000";
  } else {
    return;
  }
});

function resetStartBtn() {
  startBtn.setAttribute("data-state", "enabled");
  startBtn.style.backgroundColor = "#444";
  document.querySelector(".timeCaption").style.color = "#aaa";
  document.getElementById("time").style.color = "#aaa";
}
