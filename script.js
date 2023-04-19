const boxes = document.querySelectorAll('.box');
const correctBox = document.querySelector('.box.correct');

correctBox.addEventListener('mouseover', function() {
  correctBox.classList.add('locked');
});