const startButton = document.querySelector('.start-button');
const buttonBackground = document.querySelector('.button');
const buttonShadow = document.querySelector('.button-shadow');
const buttonContainer = document.querySelector('.button-container');

const block = document.querySelector('.block');
const accordion = document.querySelector('.accordion');

const inputBackground = document.querySelector('.form__background');
const inputBoxshadow = document.querySelector('.form__boxshadow');
const inputContainer = document.querySelector('.form__container');
const inputButton = document.querySelector('.button__form');
const deleteButton = document.querySelector('.delete__button');

// Get random number
function getRandomInt() {
  let randomNumber1 = Math.random() * 1000000;
  let randomNumber2 = Math.random() * 1000000;
  let minNum = Math.ceil(randomNumber1);
  let maxNum = Math.floor(randomNumber2);
  let numRange = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
  let color = `#${numRange}`;
  return color;
}

function putColors(backGround, boxShadow, container) {

  if(backGround.includes('#')) {
    document.body.style.backgroundColor = backGround;
  }else {
    document.body.style.backgroundColor = `#${backGround}`;
  }
  
  if(boxShadow.includes('#')) {
    document.querySelector(".interactive").style.boxShadow = `12px 12px 2px 1px ${boxShadow}`;
    document.getElementById('header').style.color = boxShadow;
    document.querySelector('button').style.backgroundColor = boxShadow;
  }else {
    document.querySelector(".interactive").style.boxShadow = `12px 12px 2px 1px #${boxShadow}`;
    document.getElementById('header').style.color = `#${boxShadow}`;
    document.querySelector('button').style.backgroundColor = `#${boxShadow}`;
  }

  if(container.includes('#')) {
    document.getElementById("container").style.backgroundColor = container;
  }else {
    document.getElementById("container").style.backgroundColor = `#${container}`;
  }
}

startButton.addEventListener('click', event => {
  event.preventDefault();
  document.querySelector(".accordion").classList.add('visible');
  headerStart = document.querySelector('.header-start');
  headerStart.innerHTML = 'Look at changes here';
  startButton.innerHTML = 'and here'
})


buttonBackground.addEventListener('click', event => {
  event.preventDefault();
  getRandomInt()
  let colorBackground = getRandomInt();
  if(colorBackground.length == 7) {
    document.body.style.backgroundColor = colorBackground;
  } else {
    getRandomInt();
  }
});

buttonShadow.addEventListener('click', event => {
  event.preventDefault();
  getRandomInt();
  let colorShadow = getRandomInt();
  if(colorShadow.length == 7) {
    document.querySelector(".interactive").style.boxShadow = `12px 12px 2px 1px ${colorShadow}`;
    document.getElementById('header').style.color = colorShadow;
    document.querySelector('button').style.backgroundColor = colorShadow
  } else {
    getRandomInt();
  }
})

buttonContainer.addEventListener('click', event => {
  event.preventDefault();
  getRandomInt();
  let colorStage = getRandomInt();
  if(colorStage.length == 7) {
    document.getElementById("container").style.backgroundColor = colorStage;
  } else {
    getRandomInt();
  }
})

inputButton.addEventListener('click', (event) => {
  event.preventDefault();
  putColors(inputBackground.value, inputBoxshadow.value, inputContainer.value);
})

deleteButton.addEventListener('click', (event) => {
  event.preventDefault();
  if(confirm('Are you sure to delete ?')) {
    inputBackground.value = '';
    inputBoxshadow.value = '';
    inputContainer.value = '';
  }
})