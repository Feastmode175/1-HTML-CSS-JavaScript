let numberOfFaces = 5;
let numTries = 0;
const leftSide = document.querySelector('#leftSide');
const rightSide = document.querySelector('#rightSide');

window.addEventListener('load', generateFaces);

function generateFaces() {
  for (i = 0; i < numberOfFaces; i++) {
    let face = document.createElement('img');
    face.src = '../images/smile.png';
    
    let randomTop = Math.floor(Math.random() * 400 ) + 1;
    let randomLeft = Math.floor(Math.random() * 400 ) + 1;

    face.style.top = randomTop + 'px';
    face.style.left = randomLeft + 'px';

    leftSide.appendChild(face);
  }

  const leftSideImages = leftSide.cloneNode(true);
  leftSideImages.removeChild(leftSideImages.lastChild);
  rightSide.appendChild(leftSideImages);

  leftSide.lastChild.addEventListener('click', nextLevel);
  document.body.addEventListener('click', gameOver);
}


function nextLevel(event) {
  event.stopPropagation();
  numberOfFaces += 5;
  numTries++

  while (leftSide.hasChildNodes()) {
    leftSide.removeChild(leftSide.firstChild);
  }
  while (rightSide.hasChildNodes()) {
    rightSide.removeChild(rightSide.firstChild);

  }

  generateFaces();
}

function gameOver () {
  alert(`Game over! \n\n You made it through ${numTries} rounds!`)
  
  document.body.removeEventListener('click', gameOver);
  leftSide.lastChild.addEventListener('click', nextLevel);
}