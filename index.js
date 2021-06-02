const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

let timerId = null;

const backgrondColor = function (){
    body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
};

startBtn.addEventListener('click', changeColorBtn);
stopBtn.addEventListener('click', stopColorChanged);

function changeColorBtn() {
    timerId = setInterval(backgrondColor, 1000);
    startBtn.removeEventListener('click', changeColorBtn);
    console.log('dddddd');
};

function stopColorChanged() {
    body.style.backgroundColor = '';
    clearInterval(timerId);
    startBtn.addEventListener('click', changeColorBtn);
};
