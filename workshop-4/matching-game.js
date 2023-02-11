let numberOfFaces = 5;
const leftSide = document.querySelector('#leftSide');

window.addEventListener('load', generateFaces)

function generateFaces () {
  for (i = 0; i < 5; i++) {
    let face = document.createElement('img');
    face.src = '../images/smile.png';
    
    let randomTop = Math.floor(Math.random() * 400 ) + 1;
    let randomLeft = Math.floor(Math.random() * 400 ) + 1;

    face.style.top = randomTop + 'px';
    face.style.left = randomLeft + 'px';

    leftSide.appendChild(face);
  }
}