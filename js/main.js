// main.js
'use strict';

const arrows = `<div class="arrows__wrap">
  <style>
    .arrows__wrap {
      position: absolute;
      top: 95px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>
  <button class="arrows__btn"><-</button>
  <button class="arrows__btn">-></button>
</div>`;

const body = document.querySelector(`body`);
body.innerHTML += arrows;

const arrowButtons = document.querySelectorAll(`.arrows__btn`);

const centralElement = document.querySelector(`.central`);

const render = (template) => {
  let div = document.createElement(`div`);
  div.innerHTML = template.innerHTML.trim();
  return div;
};

const changeScreen = (element) => {
  centralElement.innerHTML = ``;
  centralElement.appendChild(element);
};


const templates = Array.from(document.querySelectorAll(`template`));
let index = -1;

const nextScreen = () => {
  index++;
  if (index === templates.length) {
    index = 0;
  }
  changeScreen(render(templates[index]));
};

const prevScreen = () => {
  index--;
  if (index < 0) {
    index = templates.length - 1;
  }
  changeScreen(render(templates[index]));
};

const arrowDown = (e) => {
  if (e.key === `ArrowRight` || e.target.innerText === `->`) {
    nextScreen();
  } else if (e.key === `ArrowLeft` || e.target.innerText === `<-`) {
    prevScreen();
  }
};

document.addEventListener(`keydown`, arrowDown);

[...arrowButtons].forEach((arrowBtn) => arrowBtn.addEventListener(`click`, arrowDown));

