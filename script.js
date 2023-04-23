const correctBoxes = document.querySelectorAll(".box--correct");
const boxes = document.querySelectorAll(".box");
const winScreen = document.querySelector(".win-screen");
const loseScreen = document.querySelector(".lose-screen");
let incorrectGuesses = 0;
let guessCooldown = false;

correctBoxes.forEach(function (correctBox) {
  correctBox.addEventListener("mouseover", function () {
    if (!guessCooldown) {
      correctBox.classList.add("box--locked");

      const lockedBoxes = document.querySelectorAll(".box--correct.box--locked");
      if (lockedBoxes.length === correctBoxes.length) {
        showWinScreen();
      }
    }
  });
});

boxes.forEach(function (box) {
  if (!box.classList.contains("box--correct")) {
    box.addEventListener("mouseover", function () {
      if (!guessCooldown && !box.classList.contains("box--locked")) {
        box.classList.add("box--locked");
        incorrectGuesses++;

        if (incorrectGuesses === 3) {
          showLoseScreen();
        }

        guessCooldown = true;
        setTimeout(function() {
          guessCooldown = false;
        }, 1000);
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
