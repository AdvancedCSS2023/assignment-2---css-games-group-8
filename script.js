const boxes = document.querySelectorAll('.box');
const correctBox = document.querySelector('.box.correct');

correctBox.addEventListener('mouseover', function() {
  correctBox.classList.add('locked');
});

boxes.forEach(box => {
  box.addEventListener('mouseover', function() {
    if (box !== correctBox) {
      box.classList.add('wrong');
    }
  });
});