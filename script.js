const correctBoxes = document.querySelectorAll(".box--correct");
const boxes = document.querySelectorAll(".box");
const winScreen = document.querySelector(".win-screen");
const loseScreen = document.querySelector(".lose-screen");
let incorrectGuesses = 0;

correctBoxes.forEach(function (correctBox) {
  correctBox.addEventListener("mouseover", function () {
    correctBox.classList.add("box--locked");

    const lockedBoxes = document.querySelectorAll(".box--correct.box--locked");
    if (lockedBoxes.length === correctBoxes.length) {
      showWinScreen();
    }
  });
});

boxes.forEach(function (box) {
  if (!box.classList.contains("box--correct")) {
    box.addEventListener("mouseover", function () {
      incorrectGuesses++;

      if (incorrectGuesses === 3) {
        showLoseScreen();
      }
    });
  }
});

function showWinScreen() {
  winScreen.classList.add("win-screen--show");
}

function showLoseScreen() {
  loseScreen.classList.add("lose-screen--show");
}


