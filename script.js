const correctBoxes = document.querySelectorAll('.box.correct');

correctBoxes.forEach(function(correctBox) {
  correctBox.addEventListener('mouseover', function() {
    correctBox.classList.add('locked');
  });
});

