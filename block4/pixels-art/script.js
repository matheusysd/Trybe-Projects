// Randomize palette colors
function randomColor() {
  const hexa = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += hexa[Math.floor(Math.random() * 16)];
  }
  return color;
}

const blackPixel = document.getElementById('black');
blackPixel.style.backgroundColor = 'black';

const secondColor = document.getElementById('color2');
secondColor.style.backgroundColor = randomColor();

const thirdColor = document.getElementById('color3');
thirdColor.style.backgroundColor = randomColor();

const fourthColor = document.getElementById('color4');
fourthColor.style.backgroundColor = randomColor();

blackPixel.addEventListener('click', function () {
  document.querySelector('.selected').classList.remove('selected');
  blackPixel.classList.add('selected');
});

secondColor.addEventListener('click', function () {
  document.querySelector('.selected').classList.remove('selected');
  secondColor.classList.add('selected');
});

fourthColor.addEventListener('click', function () {
  document.querySelector('.selected').classList.remove('selected');
  fourthColor.classList.add('selected');
});

thirdColor.addEventListener('click', function () {
  document.querySelector('.selected').classList.remove('selected');
  thirdColor.classList.add('selected');
});

function paintPixel() {
  const pixelSelected = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelSelected.length; index += 1) {
    pixelSelected[index].addEventListener('click', function () {
      const selectedColor = document.querySelector('.selected');
      pixelSelected[index].style.backgroundColor =
        selectedColor.style.backgroundColor;
    });
  }
}
paintPixel();

// Clear pixel board
const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', function () {
  const pixelBoard = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelBoard.length; index += 1) {
    pixelBoard[index].style.backgroundColor = 'white';
  }
});

// Generate new pixel board
const inputSize = document.getElementById('board-size');
const generateButton = document.getElementById('generate-board');

function createTable() {
  document.getElementById('pixel-board').children[0].remove();
  const newTbody = document.createElement('tbody');
  document.getElementById('pixel-board').appendChild(newTbody);
  const createdTbody = document.getElementById('pixel-board').children[0];
  for (let index = 0; index < inputSize.value; index += 1) {
    const newTr = document.createElement('tr');
    createdTbody.appendChild(newTr);
    const createdTr = document.getElementsByTagName('tbody')[1].children[index];
    for (let indexY = 0; indexY < inputSize.value; indexY += 1) {
      const newTd = document.createElement('td');
      newTd.className = 'pixel';
      createdTr.appendChild(newTd);
    }
  }
  return paintPixel();
}

generateButton.addEventListener('click', () => {
  if (inputSize.value < 5 || inputSize.value > 50 || inputSize.value == null) {
    if (inputSize.value < 5) inputSize.value = 5; createTable();
    if (inputSize.value > 50) inputSize.value = 50; createTable();
    if (inputSize.value == null) inputSize.value = 5; createTable();
  } else {
    createTable();
  }
});
