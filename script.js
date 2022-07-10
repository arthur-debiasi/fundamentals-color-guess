function rColor() {
  return Math.floor(Math.random() * 256);
}

function randomColors(red, green, blue) {
  const rGBColor = `rgb(${red}, ${green}, ${blue})`;
  return rGBColor;
}

function colorAnswer() {
  return Math.floor(Math.random() * 6) + 1;
}

function sixColors() {
  const color1 = document.getElementById('ball-1');
  const color2 = document.getElementById('ball-2');
  const color3 = document.getElementById('ball-3');
  const color4 = document.getElementById('ball-4');
  const color5 = document.getElementById('ball-5');
  const color6 = document.getElementById('ball-6');
  color1.style.backgroundColor = randomColors(rColor(), rColor(), rColor());
  color2.style.backgroundColor = randomColors(rColor(), rColor(), rColor());
  color3.style.backgroundColor = randomColors(rColor(), rColor(), rColor());
  color4.style.backgroundColor = randomColors(rColor(), rColor(), rColor());
  color5.style.backgroundColor = randomColors(rColor(), rColor(), rColor());
  color6.style.backgroundColor = randomColors(rColor(), rColor(), rColor());
}

function answerColor() {
  const answer = colorAnswer();
  const answerId = `ball-${answer}`;
  const answerBall = document.getElementById(answerId);
  const answerCssObj = window.getComputedStyle(answerBall, null);
  const answerBgColor = answerCssObj.getPropertyValue('background-color');
  return answerBgColor;
}

sixColors();
const answer = answerColor();
document.getElementById('rgb-color').innerText = answer;
function clickAnswer(event) {
  if (event.target.classList.contains('ball')) {
    const targetBall = event.target;
    const targetBallCssObj = window.getComputedStyle(targetBall, null);
    const targetBallColor = targetBallCssObj.getPropertyValue('background-color');
    let score = JSON.parse(localStorage.getItem('score'));
    if (targetBallColor === answer) {
      document.getElementById('answer').innerText = 'Acertou!';
      score += 3;
      localStorage.setItem('score', score);
      document.getElementById('score').innerText = score;
    } else {
      document.getElementById('answer').innerText = 'Errou! Tente novamente';
    }
  }
}
document.addEventListener('click', clickAnswer);

window.onload = function onLoad() {
  const score = document.getElementById('score');
  if (localStorage.getItem('score') === null) {
    localStorage.setItem('score', 0);
    score.innerText = localStorage.getItem('score');
  } else {
    score.innerText = localStorage.getItem('score');
  }
};
