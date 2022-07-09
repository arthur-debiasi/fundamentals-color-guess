function randomColors() {
  const rColor = Math.floor(Math.random() * 256);
  const gColor = Math.floor(Math.random() * 256);
  const bColor = Math.floor(Math.random() * 256);
  const rGBColor = `rgb(${rColor}, ${gColor}, ${bColor})`;
  return rGBColor;
}

function sixColors() {
  const cor1 = document.getElementById('ball-1');
  const cor2 = document.getElementById('ball-2');
  const cor3 = document.getElementById('ball-3');
  const cor4 = document.getElementById('ball-4');
  const cor5 = document.getElementById('ball-5');
  const cor6 = document.getElementById('ball-6');
  cor1.style.backgroundColor = randomColors();
  cor2.style.backgroundColor = randomColors();
  cor3.style.backgroundColor = randomColors();
  cor4.style.backgroundColor = randomColors();
  cor5.style.backgroundColor = randomColors();
  cor6.style.backgroundColor = randomColors();
}

window.onload = function() {
  sixColors();
};
