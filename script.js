const correctBoxes = document.querySelectorAll(".box--correct");

correctBoxes.forEach(function (correctBox) {
  correctBox.addEventListener("mouseover", function () {
    correctBox.classList.add("box--locked");
  });
});

const boxes = document.querySelectorAll(".box");
const boxCorrect = document.querySelectorAll(".box--correct");
const winScreen = document.querySelector(".win-screen");

correctBoxes.forEach((box) => {
  box.addEventListener("mouseover", function () {
    box.classList.add("box--locked");

    const lockedBoxes = document.querySelectorAll(".box--correct.box--locked");
    if (lockedBoxes.length === correctBoxes.length) {
      showWinScreen();
    }
  });
});

function showWinScreen() {
  winScreen.classList.add("win-screen--show");
}
