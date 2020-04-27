const textAnswer = document.querySelector('#answer-text');
const scoreText = document.querySelector('#score-text');
const divRgb = document.querySelector('#rgb-color');
const divBalls = document.querySelector('#balls');
const resetBtn = document.querySelector('#reset-game');
const clrScoreBtn = document.querySelector('#clear-score');

randomRgb = () => {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

check = (element) => {
  const color = document.querySelector('.rgbColor');
  element.style.backgroundColor == color.innerHTML ? correctAnswer() : wrongAnswer();
}

createCircle = () => {
  for (let index = 0; index < 6; index += 1){ 
    const createBalls = document.createElement('span');
    createBalls.addEventListener('click', () => {
      check(createBalls);
    });
    createBalls.className = 'ball';
    createBalls.style.backgroundColor = randomRgb();
    divBalls.appendChild(createBalls);
  }  
}

resetBtn.addEventListener('click', () => {
  cicle();
});


clrScoreBtn.addEventListener('click', () => {
  scoreText.innerHTML = 0;
});

getRandomRgb = () => {
  const color = document.createElement('p');
  color.className = 'rgbColor';
  const ball = document.querySelectorAll('.ball');
  color.innerHTML = ball[Math.floor(Math.random()* 6)].style.backgroundColor;
  divRgb.appendChild(color);
}

correctAnswer = () => {
  textAnswer.innerHTML = "Acertou!";
  scoreText.innerHTML = parseInt(scoreText.innerHTML, 10) + 3;
  cicle();
}

wrongAnswer = () => {
  textAnswer.innerHTML = "Errou! Tente novamente!";

}

cicle = () => {
  divRgb.innerHTML = '';
  divBalls.innerHTML = '';
  createCircle();
  getRandomRgb();
}
cicle();

